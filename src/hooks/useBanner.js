import { useState } from 'react';
import { useBoolean } from 'ahooks';
import { getStrapiEntriesService } from '~/services/strapi/strapiQueryServices';
import { loadHomeAllData, loadCategoryBySuperCat } from '~/services/apiService';
import { APP_DEFAULT_PAGE_SIZE } from '~/constants/appConstants';

const COLLECTION_TYPE = 'banners';

export default function useBanner(slug) {
    const [loading, { setTrue: enableLoading, setFalse: disableLoading }] =
        useBoolean();
    const [banners, setBanners] = useState([]);
    const [homedata, setHomeData] = useState({});
    const [category, setCategory] = useState([]);

    const getBannersBySlugs = async (slugs) => {
        enableLoading();
        try {
            const response = await getStrapiEntriesService(COLLECTION_TYPE, {
                filters: {
                    slug: {
                        $in: slugs,
                    },
                },
                pagination: { pageSize: APP_DEFAULT_PAGE_SIZE },
                sort: ['id:desc'],
                populate: {
                    images: {
                        populate: ['image'],
                    },
                },
            });
            setBanners(response.data || []);
        } catch (e) {
            setBanners(null);
        } finally {
            disableLoading();
        }
    };

    const getAllHomeData = async () => {
        enableLoading();
        try {
            const response = await loadHomeAllData();
            setHomeData(response.data || {});
        } catch (e) {
            setHomeData({});
        } finally {
            disableLoading();
        }
    };

    const getCategoryBySuperCat = async () => {
        enableLoading();
        try {
            const response = await loadCategoryBySuperCat();
            setCategory(response.data || []);
        } catch (e) {
            setCategory([]);
        } finally {
            disableLoading();
        }
    };

    return {
        loading,
        banners,
        homedata,
        category,
        getBannersBySlugs,
        getAllHomeData,
        getCategoryBySuperCat,
    };
}
