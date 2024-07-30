'use client';
import React, { useMemo, useState, useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import { useParams } from 'next/navigation';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import useProducCategory from '~/hooks/useProducCategory';
import ShopItems from '~/components/partials/shop/ShopItems';
import FAQAccordion from '~/components/shared/section/FAQSection';
import MKTFilterWidget from '~/components/shared/widgets/MKTFilterWidget';
import BestSellerProduct from '~/components/elements/products/BestSellerProduct';
import ShopCarouselProductBox from '~/components/partials/shop/ShopCarouselProductBox';
import SortByDropdown from '~/components/shared/widgets/SortByDropdown';
import ShopItemsCarousel from '~/components/partials/shop/ShopItemsCarousel';
import PreFooterContent from '~/components/shared/section/PreFooterContent';
import MKTCustomBanner from '~/components/shared/section/MKTCustomBanner';
import useBanner from '~/hooks/useBanner';

export default function ProductScreen() {
    const { slug } = useParams();
    const { loading, categoryDetails } = useProducCategory(slug);
    const { category, getCategoryBySuperCat } = useBanner();
    const [categoryData, setCategoryData] = useState({});
    useEffect(() => {
        if (category && category.cat_list) {
            setCategoryData(
                category.cat_list.find((item) => item.slug === slug)
            );
        }
    }, [category]);

    useEffect(() => {
        getCategoryBySuperCat();
    }, []);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Products',
            url: '/',
        },
        {
            text: category ? category.name : 'Namkeen',
        },
    ];

    const products = useMemo(() => {
        if (!categoryDetails) return [];
        return categoryDetails.products.data;
    }, [categoryDetails]);

    const productContent = useMemo(() => {
        if (loading) return <p>Loading...</p>;
        if (categoryDetails) {
            return <ProductItems columns={4} products={products} />;
        }
    }, [loading, categoryDetails, products]);

    console.log(category?.cat_list?.[1]?.cat_banner, 'cat list from cat');

    return (
        <PageContainer
            footer={<FooterDefault />}
            title={categoryDetails ? categoryDetails.title : 'Category'}
            boxed={true}>
            <div className="ps-page--shop">
                <div className="container">
                    <div className="banner-container">
                        <h2>Buy {categoryData?.name} Online</h2>
                        <MKTCustomBanner />
                        <img
                            src={`https://momskart-live-images1.s3.ap-south-1.amazonaws.com/uploads/category/${category?.cat_list?.[1]?.cat_banner}`}
                            alt="Momskart Namkeen Banner"
                        />
                    </div>
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            <MKTFilterWidget />
                        </div>
                        <div className="ps-layout__right">
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                <BreadCrumb
                                    breacrumb={breadCrumb}
                                    extraClass={'breadcrumb-category'}
                                />
                                <SortByDropdown />
                            </div>
                            <ShopItems />
                            <h3 className="ps-shop__heading">
                                {category && category.name}
                            </h3>
                            {productContent}
                        </div>
                    </div>
                    <div class="best-seller-container">
                        <h3>Best Seller in Namkeen</h3>
                        <ShopItemsCarousel
                            extraClass={'bs-carousel-category'}
                        />
                    </div>
                    <PreFooterContent>
                        <h3>
                            Welcome to the flavorful world of Indian snacks and
                            sweets!
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum
                        </p>
                        <h3>Stay tuned for more information</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in section 1.10.32.The standard chunk of Lorem
                            Ipsum used since the 1500s is reproduced below for
                            those interested. Sections 1.10.32 and 1.10.33 from
                            "de Finibus Bonorum et Malorum" by Cicero are also
                            reproduced in their exact original form, accompanied
                            by English versions from the 1914 translation by H.
                            Rackham.
                        </p>
                        <h3>Sweet Snacks</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum
                        </p>
                        <h3>FAQ</h3>
                        <FAQAccordion />
                    </PreFooterContent>
                </div>
            </div>
        </PageContainer>
    );
}
