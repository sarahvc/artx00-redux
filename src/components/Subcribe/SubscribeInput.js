import React from 'react';
import PropTypes from 'prop-types';

export const SubscribeInput = ({ input }) => {
    return (
        <div>
            <input
                {...input}
                placeholder='Email'
                type='email'
                id='subscribeEmail'
                className="py-3 apl-8 border-0 w-100 text-white artx-type-tw"
                required
            />
        </div>
    );
};

SubscribeInput.propTypes = {
    input: PropTypes.object.isRequired
};
export default SubscribeInput; 
