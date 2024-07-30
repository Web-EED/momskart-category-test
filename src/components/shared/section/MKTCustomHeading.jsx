import React from 'react';

const MKTCustomHeading = ({
    title = 'Placeholder Title',
    icon,
    line = 'yes',
}) => {
    return (
        <div className="container">
            <div className={'mkt-custom-heading'}>
                {line === 'yes' && (
                    <div className="mkt-custom-heading__line"></div>
                )}
                <div className="mkt-custom-heading__text">
                    {icon && <img src={icon} />} <h2>{title}</h2>
                </div>
                {line === 'yes' && (
                    <div className="mkt-custom-heading__line"></div>
                )}
            </div>
        </div>
    );
};

export default MKTCustomHeading;
