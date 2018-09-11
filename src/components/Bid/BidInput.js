import React from 'react';
import PropTypes from 'prop-types';

export const BidInput = ({ input, type, id }) => {
    return (
        <div>
            <input
                {...input}
                type={type}
                id={id}
                className="artx-bid-input artx-type-et text-white mr-2"
            />
        </div>
    );
};

BidInput.propTypes = {
    input: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default BidInput;