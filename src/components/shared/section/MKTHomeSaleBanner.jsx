import React from 'react';

const defaultSaleImages = [
    {
        src: '/static/img/mkt-sale-image-1.png',
        alt: 'Sale Image 1',
    },
    {
        src: '/static/img/mkt-sale-image-2.png',
        alt: 'Sale Image 2',
    },
    {
        src: '/static/img/mkt-sale-image-3.png',
        alt: 'Sale Image 3',
    },
];

const MKTHomeSaleBanner = ({ saleImages = defaultSaleImages }) => {
    return (
        <div className="container">
            <div className="sale-image-container">
                {saleImages.map((saleImage, index) => (
                    <img
                        key={index}
                        className="sale-image"
                        src={saleImage.src}
                        alt={saleImage.alt}
                    />
                ))}
            </div>
        </div>
    );
};

export default MKTHomeSaleBanner;
