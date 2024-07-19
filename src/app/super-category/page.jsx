'use client';
import React, { useMemo, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { useParams } from 'next/navigation';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import useProducCategory from '~/hooks/useProducCategory';
import ShopItems from '~/components/partials/shop/ShopItems';
import FAQAccordion from '~/components/shared/section/FAQSection';
import MKTFilterWidget from '~/components/shared/widgets/MKTFilterWidget';
import SortByDropdown from '~/components/shared/widgets/SortByDropdown';
import ShopItemsCarousel from '~/components/partials/shop/ShopItemsCarousel';
import Link from 'next/link';

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

    const faqs = [
        {
            question: 'Authentic Crunch with Delightful Spice?',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
        {
            question: 'Good taste, lasts long and fresh?',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
        {
            question: 'Check ingredient before buying??',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
        {
            question: 'Can I change my order?',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
        {
            question: 'How to keep the Namkeen crunchier?',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
        {
            question: 'Awesome taste?',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
        {
            question: 'Was a good product this time!?',
            answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
        },
    ];

    const superCategories = [
        {
            src: '/static/img/mk-sc-sev.png',
            alt: 'Momskart Super Category Sev',
            name: 'Sev',
        },
        {
            src: '/static/img/mk-sc-namkeen.png',
            alt: 'Momskart Super Category Namkeen',
            name: 'Namkeen',
        },
        {
            src: '/static/img/mk-sc-khakhras.png',
            alt: 'Momskart Super Category Khakhra',
            name: 'Khakhras',
        },
        {
            src: '/static/img/mk-sc-biscuits.png',
            alt: 'Momskart Super Category Biscuits & Cookies',
            name: 'Biscuits & Cookies',
        },
        {
            src: '/static/img/mk-sc-papad.png',
            alt: 'Momskart Super Category Papad',
            name: 'Papad',
        },
        {
            src: '/static/img/mk-sc-snacks.png',
            alt: 'Momskart Super Category Snacks with Tea',
            name: 'Snacks with Tea',
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
                    <div className="supercategories-container">
                        <h3>Super Categories</h3>
                        <div className="super-category-icons">
                            {superCategories.map((superCategory, index) => (
                                <Link
                                    key={index}
                                    href={'/'}
                                    className="super-category-icon">
                                    <img
                                        src={superCategory.src}
                                        alt={superCategory.alt}
                                        width={'150px'}
                                        height={'150px'}
                                    />
                                    <span>{superCategory.name}</span>
                                </Link>
                            ))}
                        </div>
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
                                <BreadCrumb breacrumb={breadCrumb} />
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
                        <ShopItemsCarousel />
                    </div>
                    <div class="pre-footer-container">
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
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
