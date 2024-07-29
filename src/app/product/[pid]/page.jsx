'use client';
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import useGetProducts from '~/hooks/useGetProducts';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import FAQAccordion from '~/components/shared/section/FAQSection';
import ShopItemsCarousel from '~/components/partials/shop/ShopItemsCarousel';
import PreFooterContent from '~/components/shared/section/PreFooterContent';

const ProductDefaultPage = () => {
    const params = useParams();
    const { pid } = params;
    const { loading, getStrapiProduct, product, relatedProduct } =
        useGetProducts();
    console.log(product);
    useEffect(() => {
        getStrapiProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: product?.title || 'Untitled Product',
        },
    ];

    const productDetails = useMemo(() => {
        if (loading) {
            return <SkeletonProductDetail />;
        }
        if (product) {
            return <ProductDetailFullwidth product={product} />;
        }
    }, [loading, product]);

    const headerView = useMemo(() => {
        if (loading) {
            return (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
        if (product) {
            return (
                <>
                    <HeaderProduct product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            return (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
    }, [loading, product]);

    return (
        <PageContainer
            header={headerView}
            title={product?.title || 'Untitled Product'}>
            <BreadCrumb
                breacrumb={breadCrumb}
                layout="fullwidth"
                extraClass={'breadcrumb-product'}
            />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div>{productDetails}</div>
                        <div
                            className="ps-page__right"
                            style={{ display: 'none' }}>
                            <ProductWidgets />
                        </div>
                    </div>
                    <div class="best-seller-container">
                        <h3>Related Product</h3>
                        <ShopItemsCarousel extraClass={'bs-carousel-product'} />
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
};

export default ProductDefaultPage;
