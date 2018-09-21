import React from 'react';
import PropTypes from 'prop-types';

export const SubscribeBottomInput = ({ input }) => {
    return (
        <div className='w-100'>
            <input
                {...input}
                placeholder='Email'
                type='email'
                id="artxAE"
                className="artx-type-tw text-white border-0 w-100"
                required
            />
        </div>
    );
};

SubscribeBottomInput.propTypes = {
    input: PropTypes.object.isRequired
};
export default SubscribeBottomInput; 
