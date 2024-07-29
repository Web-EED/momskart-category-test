import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/description/PartialVendor';
import ProductOverview from '~/components/elements/detail/description/ProductOverview';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import PartialOffer from '~/components/elements/detail/description/PartialOffer';

const { TabPane } = Tabs;

const DefaultDescription = () => {
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs
                defaultActiveKey="2"
                tabBarStyle={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                <TabPane tab="Product Overview" key="1">
                    <ProductOverview />
                </TabPane>
                <TabPane tab="Additional Information" key="2">
                    <PartialSpecification />
                </TabPane>
                <TabPane tab="QnA" key="3">
                    <PartialVendor />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
