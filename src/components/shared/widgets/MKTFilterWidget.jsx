import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const MKTFilterWidget = () => {
    const [priceRange, setPriceRange] = useState([50, 1000]);

    const handlePriceChange = (values) => {
        setPriceRange(values);
    };

    const handleApplyFilter = () => {
        alert(`Filters applied:\nCategory: \nPrice: ₹${priceRange[0]} - ₹${priceRange[1]}`);
    };

    return (
        <aside className="filter-component">
            <div className="filter-inner">
                <div className="filter-header">
                    <span className="filter-title">Filters</span>
                    <img src="/static/img/settings-icon.svg" alt="Filter Icon" className="filter-icon" />
                </div>
                <div className="filter-category">
                    <div className="category-item">Namkeen</div>
                    <div className="category-item">Khakhras</div>
                    <div className="category-item">Biscuits & Cookies</div>
                    <div className="category-item">Sev</div>
                    <div className="category-item">Snacks with Tea</div>
                </div>
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
                <hr style={{margin: "20px 0"}} />
                <button className="apply-filter" onClick={handleApplyFilter}>Apply Filter</button>
            </div>
        </aside>
    );
};

export default MKTFilterWidget;
