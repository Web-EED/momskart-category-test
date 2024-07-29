import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import { loadHomeData } from '~/services/apiService';

const categoryItems = [
    'Namkeen',
    'Khakhras',
    'Biscuits & Cookies',
    'Sev',
    'Snacks with Tea',
];

const MKTFilterWidget = () => {
    const [priceRange, setPriceRange] = useState([50, 1000]);

    const getItems = async () => {
        try {
            const response = await loadHomeData();
            console.log(response);
        } catch (err) {
            console.log('not found');
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    const handlePriceChange = (values) => {
        setPriceRange(values);
    };

    const handleApplyFilter = () => {
        alert(
            `Filters applied:\nCategory: \nPrice: ₹${priceRange[0]} - ₹${priceRange[1]}`
        );
    };

    return (
        <aside className="filter-component">
            <div className="filter-inner">
                <div className="filter-header">
                    <span className="filter-title">Filters</span>
                    <img
                        src="/static/img/settings-icon.svg"
                        alt="Filter Icon"
                        className="filter-icon"
                    />
                </div>
                <hr style={{ margin: '20px 0' }} />
                {categoryItems.map((category, index) => (
                    <div key={index} className="category-item">
                        {category}
                        <img
                            src="/static/img/mk-filter-right-arrow.svg"
                            className="mk-filter-rightarrow"
                        />
                    </div>
                ))}
                <hr />
                <div className="filter-price">
                    <div className="price-header">
                        <span className="price-title">Price</span>
                    </div>
                    <div className="price-slider">
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            min={50}
                            max={1000}
                            defaultValue={[200, 900]}
                            value={priceRange}
                            onChange={handlePriceChange}
                            withTracks={true}
                            pearling
                            minDistance={10}
                        />
                        <div className="price-values">
                            <span id="minPriceValue">₹{priceRange[0]}</span>
                            <span id="maxPriceValue">₹{priceRange[1]}</span>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: '20px 0' }} />
                <button className="apply-filter" onClick={handleApplyFilter}>
                    Apply Filter
                </button>
            </div>
        </aside>
    );
};

export default MKTFilterWidget;
