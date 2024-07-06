import React from 'react';

const SortByDropdown = () => {
    return (
        <div className="sort-by-container">
            <label htmlFor="sort-by">Sort by: </label>
            <select id="sort-by" name="sort-by">
                <option value="most-popular">Most Popular</option>
                <option value="featured">Featured</option>
                <option value="best-sellers">Best Sellers</option>
                <option value="new-arrivals">New Arrivals</option>
            </select>
        </div>
    );
};

export default SortByDropdown;
