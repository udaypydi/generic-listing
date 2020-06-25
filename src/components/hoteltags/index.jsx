import React from 'react';
import PropTypes from 'prop-types';

function HotelTag({ tag }) {
    return (
        <p className="border border-blue-700 text-blue-700 p-1 text-sm">{tag}</p>
    );
}

HotelTag.propTypes = {
    tag: PropTypes.string,
};

HotelTag.defaultProps = {
    tag: '',
};

export default HotelTag;
