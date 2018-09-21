import React from 'react';
import PropTypes from 'prop-types';

export const SubscribeBottomInput = ({ input }) => {
    return (
        <div className='w-100'>
            <input
                {...input}
                placeholder='Email'
                type='email'
                id='subscribeEmail'
                className="py-3 apl-8 border-0 w-100 artx-gradient-border-mockup-inner text-white"
                required
            />
        </div>
    );
};

SubscribeBottomInput.propTypes = {
    input: PropTypes.object.isRequired
};
export default SubscribeBottomInput; 
