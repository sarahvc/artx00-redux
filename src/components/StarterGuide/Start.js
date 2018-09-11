import React from 'react';
import PropTypes from 'prop-types';

const Start = (skip, start) => (
    <div>
        <p className='artx-type-et text-white'>Welcome to the world of Decentralism! <i>Genesis</i>, the first DArt on the Ethereum blockchain, will be created and auctioned simultaneously.</p>
        <p className='artx-type-et text-white font-weight-bold'>Take 30 seconds to go through a brief tutorial?</p>
        <div className='d-flex justify-content-around'>
            <button className='btn btn-link text-white artx-type-tw' onClick={skip}>Skip</button>
            <button className='btn btn-link text-warning artx-type-tw' onClick={start}>Start</button>
        </div>
    </div>
);

Start.propTypes = {
    skip: PropTypes.func.isRequired,
    start: PropTypes.func.isRequired
};

export default Start;
