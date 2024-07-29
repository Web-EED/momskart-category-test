import React, { useMemo } from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    const { sale, sale_price, title, price, business_name, seller_name } =
        product;

    const productBrandName = useMemo(() => {
        return business_name ? business_name : 'No Brand';
    }, [business_name]);

    const productPrice = useMemo(() => {
        if (sale) {
            return (
                <h4 className="ps-product__price sale">
                    <del className="mr-2">
                        &
                        {price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                        })}
                    </del>
                    ₹
                    {sale_price.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                    })}
                </h4>
            );
        } else {
            return (
                <h4 className="ps-product__price">
                    ₹
                    {price.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                    })}
                </h4>
            );
        }
    }, [sale, price]);

    const productTitle = useMemo(() => {
        return title || 'Untitled Product';
    }, [title]);

    const vendor = useMemo(() => {
        if (!seller_name) return 'No Vendor';
        return seller_name ? seller_name : 'No Vendor';
    }, [seller_name]);

    return (
        <header>
            <h1>{productTitle}</h1>
            <p>
                Sold By:
                <Link href={'/shop'}>
                    <strong> {vendor}</strong>
                </Link>
            </p>
            <div className="ps-product__meta">
                <div className="ps-product__rating">
                    <Rating />
                    <span>1000 review</span>
                </div>
            </div>
            {productPrice}
        </header>
    );
};

export default ModuleDetailTopInformation;
