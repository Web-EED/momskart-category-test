'use client';
import React, { useEffect, useMemo } from 'react';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import useBanner from '~/hooks/useBanner';
import PreFooterContent from '~/components/shared/section/PreFooterContent';
import FAQAccordion, {
    defaultFaqs,
} from '~/components/shared/section/FAQSection';
import MKTCustomDivider from '~/components/shared/section/MKTCustomDivider';

export default function DefaultHomeContent() {
    const {
        loading,
        homedata,
        category,
        getAllHomeData,
        getCategoryBySuperCat,
    } = useBanner();

    useEffect(() => {
        getAllHomeData();
        getCategoryBySuperCat();
    }, []);
    console.log(category, `Category log on home page`);
    return (
        <main id="homepage-1">
            <HomeDefaultBanner
                loading={loading}
                banners={homedata.bannerData ? homedata.bannerData : []}
            />
            <SiteFeatures />
            <HomeDefaultDealOfDay
                loading={loading}
                products={homedata.bestSellingProduct}
            />
            <HomeAdsColumns />
            <HomeDefaultTopCategories />
            {/* {homedata?.homedata?.map((category_data,i) =>  {
                 return category_data.productList?category_data.productList ? (<HomeDefaultDealOfDay
                    categorySlug="17"
                    title={category_data.name}
                    products={category_data.productList?category_data.productList:[]}
                    loading={loading}
                    key={i}
                />) :(<></>)
            })} */}
            {homedata?.homedata?.map((category_data, i) => {
                if (category_data.productList.length > 0) {
                    return (
                        <HomeDefaultDealOfDay
                            categorySlug={category_data.slug}
                            title={category_data.name}
                            products={category_data.productList}
                            loading={loading}
                            key={i}
                        />
                    );
                }
                return null;
            })}
            <DownLoadApp />
            <PreFooterContent>
                <p>
                    Momskart is a social commerce marketplace built on the
                    philosophy of empowering rural India and brings India
                    together through homemade & Handmade Products, bridges the
                    gap between home-based women entrepreneurs,and the urban
                    customers who love their traditional Indian culture,
                    creating an inclusive growth model for use by other
                    women-led small-scale, craft-centric, home-based
                    businesses.The platform enables users to buy authentic and
                    inspirational mom-made Indian delights made with love from
                    across India.
                </p>
                <p>
                    Momskart has partnered with hundreds of women across India
                    with thousands of unique cultural edible food & craft
                    products and growing every day. is located at the food
                    capital of India, Indore.
                </p>
                <h3>MOMSKART’S MISSION</h3>
                <p>
                    Is to provide economic independence to aspiring women
                    entrepreneurs who are homemakers through the finest delivery
                    of handmade & homemade traditional edible products prepared
                    by women of India. To satisfy customers by the delights
                    prepared by the Momskart family is our ultimate goal with
                    promotion of Vocal for Local & Atma Nirbhar Bharat Mission.
                </p>
                <p>
                    INDIA’S BEST ONLINE MARKETPLACE FOR HANDMADE & HOMEMADE
                    PRODUCTS
                </p>
                <p>
                    If you would like to experience the best of online shopping
                    for handmade & homemade products from different cultures in
                    India, you are at the right place. Momskart is the ultimate
                    destination for artistic, Authentic, Inspirational,
                    traditional handmade & handcraft products, personal care
                    products and more. It is time to redefine your taste
                    statement with our treasure-trove of unique items. Our
                    online store brings you the fresh products made in small
                    batches in ultimate hygiene From different cultures &
                    origins of India. You can shop online at Momskart from the
                    comfort of your home and get your favorites delivered right
                    to your doorstep.
                </p>
                <MKTCustomDivider
                    newClass={'circular-divider'}
                    martop={120}
                    marbot={70}
                />
                <FAQAccordion faqs={defaultFaqs} />
            </PreFooterContent>
        </main>
    );
}
