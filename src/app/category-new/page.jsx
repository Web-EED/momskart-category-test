'use client';
import React, { useMemo, useState } from 'react';
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

export default function ProductScreen() {
    const { slug } = useParams();
    const [category, setCategory] = useState(null);
    const { loading, categoryDetails } = useProducCategory(slug);

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

    return (
        <PageContainer
            footer={<FooterDefault />}
            title={categoryDetails ? categoryDetails.title : 'Category'}
            boxed={true}>
            <div className="ps-page--shop">
                <div className="container">
                    <div className="banner-container">
                        <h2>Buy Namkeen Online</h2>
                        <img
                            src="https://i.ibb.co/Xs2z0jj/Pickles-webp-2.webp"
                            alt="Momskart Namkeen Banner"
                        />
                    </div>
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <BreadCrumb breacrumb={breadCrumb} />
                            <ShopItems />
                            <h3 className="ps-shop__heading">
                                {category && category.name}
                            </h3>
                            {productContent}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
