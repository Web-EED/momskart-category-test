import React, {
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { Pagination } from 'antd';
import Product from '~/components/elements/products/Product';
import WideProduct from '~/components/elements/products/WideProduct';
import ModuleShopSortBy from '~/components/partials/shop/modules/ModuleShopSortBy';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import useGetProducts from '~/hooks/useGetProducts';
import { useRouter, useSearchParams } from 'next/navigation';
import { DEFAULT_QUERY_GET_PRODUCTS } from '~/services/queries/productStrapiQueries';
import DealOfDayProduct from '~/components/elements/products/DealOfDayProduct';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderNextArrow from '~/components/elements/slider-custom-buttons/SliderNextArrow';
import SliderPrevArrow from '~/components/elements/slider-custom-buttons/SliderPrevArrow';

const ShopItemsCarousel = ({ columns = 4, pageSize = 3, extraClass }) => {
    const Router = useRouter();
    const searchParams = useSearchParams();
    const pageIndex = searchParams.get('page');
    const { query } = Router;
    const [listView, setListView] = useState(true);
    const [classes, setClasses] = useState(
        'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    );

    const { loading, products, meta, getStrapiProducts } = useGetProducts();

    const total = useMemo(() => (meta ? meta.pagination.total : 0), [meta]);

    function handleChangeViewMode(e) {
        e.preventDefault();
        setListView(!listView);
    }

    function handlePagination(page, pageSize) {
        Router.push(`/shop?page=${page}`);
    }

    const getProducts = useCallback(
        (payload) => {
            const query = payload
                ? {
                      ...DEFAULT_QUERY_GET_PRODUCTS,
                      ...payload,
                  }
                : {
                      ...DEFAULT_QUERY_GET_PRODUCTS,
                  };
            getStrapiProducts(query);
        },
        [getStrapiProducts]
    );

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        let params;
        const page = pageIndex || 1;
        if (query) {
            if (page !== 1) {
                params = {
                    pagination: {
                        page: page,
                        pageSize: pageSize,
                    },
                };
            }
        } else {
            params = {
                pagination: {
                    page: 1,
                    pageSize: pageSize,
                },
            };
        }
        getProducts(params);
    }, [query]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on mount to set initial value

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sliderSettings = useMemo(
        () => ({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: isMobile ? <SliderNextArrow /> : <SliderNextArrow />,
            prevArrow: isMobile ? <SliderPrevArrow /> : <SliderPrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
            ],
        }),
        [isMobile]
    );

    const productsContent = useMemo(() => {
        if (!loading) {
            if (products && products.length > 0) {
                if (listView) {
                    const items = products.map((item) => (
                        <div className={'test-classes'} key={item.id}>
                            <DealOfDayProduct
                                product={item}
                                extraClass={'like-button-blue'}
                            />
                        </div>
                    ));
                    return (
                        <div className={`ps-shop-items ${extraClass}`}>
                            <Slider {...sliderSettings}>{items}</Slider>
                        </div>
                    );
                } else {
                    return products.map((item) => (
                        <WideProduct product={item} />
                    ));
                }
            } else {
                return <p>No product found.</p>;
            }
        } else {
            const skeletonItems = generateTempArray(isMobile ? 2 : 3).map(
                (item) => (
                    <div className={classes} key={item}>
                        <SkeletonProduct />
                    </div>
                )
            );
            return <div className="row">{skeletonItems}</div>;
        }
    }, [loading, listView, products, classes]);

    return (
        <Suspense>
            <div className="ps-shopping__content">{productsContent}</div>
        </Suspense>
    );
};

export default ShopItemsCarousel;
