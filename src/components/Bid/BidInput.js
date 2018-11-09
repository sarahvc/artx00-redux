import React from 'react';
import PropTypes from 'prop-types';

export const BidInput = ({ input }) => {
    return (
        <div>
            <input
                {...input}
                className="artx-bid-input artx-type-et text-white mr-2"
                required
            />
        </div>
    );
};

BidInput.propTypes = {
    input: PropTypes.object.isRequired
};

export default BidInput;