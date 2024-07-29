import { useState, useRef } from 'react';

export const items = [
    {
        itemImage: '/static/img/temp-snack-1.png',
        itemTitle: 'Homemade Product 1',
        itemPrice: '100',
        itemDiscount: '90',
    },
    {
        itemImage: '/static/img/temp-snack-2.png',
        itemTitle: 'Homemade Product 2',
        itemPrice: '200',
        itemDiscount: '170',
    },
    {
        itemImage: '/static/img/temp-snack-3.png',
        itemTitle: 'Homemade Product 3',
        itemPrice: '150',
        itemDiscount: '130',
    },
];

const GroupedItems = ({ cards = items }) => {
    return (
        <div className="grouped-items-container">
            <h2 className="grouped-head">Buy it With:</h2>
            <div className="grouped-cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="grouped-card-wrapper">
                        <div className="grouped-card">
                            <img
                                src={card.itemImage}
                                alt={card.itemTitle}
                                className="grouped-card-image"
                            />
                            <div className="grouped-card-info">
                                <p className="grouped-card-title">
                                    {card.itemTitle}
                                </p>
                                <div className="grouped-card-prices">
                                    <span className="grouped-discounted-price">
                                        ₹{card.itemDiscount}
                                    </span>
                                    <span className="grouped-original-price">
                                        ₹{card.itemPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {index < cards.length - 1 && (
                            <span className="grouped-plus-icon">+</span>
                        )}
                    </div>
                ))}
            </div>
            <button className="add-to-cart-btn">
                Add All {cards.length} to Cart
            </button>
        </div>
    );
};

export default GroupedItems;
