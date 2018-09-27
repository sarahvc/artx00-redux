import React from 'react';
import PropTypes from 'prop-types';

export const BidInput = ({ input }) => {
    return (
        <div>
            <input
                {...input}
                type='number'
                className="artx-bid-input artx-type-et text-white mr-2"
            />
        </div>
    );
};

BidInput.propTypes = {
    input: PropTypes.object.isRequired
};

export default BidInput;