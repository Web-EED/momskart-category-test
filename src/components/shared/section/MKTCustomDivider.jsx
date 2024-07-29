import React from 'react';

const MKTCustomDivider = ({ newClass, martop = 0, marbot = 0 }) => {
    return (
        <div
            className={`${newClass}`}
            style={{
                marginTop: `${martop}px`,
                marginBottom: `${marbot}px`,
            }}></div>
    );
};

export default MKTCustomDivider;
