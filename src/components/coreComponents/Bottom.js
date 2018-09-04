import React from 'react';
import Subscribe from '../shared/atoms/Subscribe';

const Bottom = () => (
    <div>
        <div className='d-flex justify-content-between artx-rule'>
            <img className='img-fluid' src='https://via.placeholder.com/528x260' alt='' aria-hidden='true'/>
            <p className='artx-type-tw text-white w-100'>
            Genesis is co-owned by all Decentralists, who gain profits by trading shares of the work. The Decentralist that most accurately appraises the auction price will win the big award. Learn more about how to win money and this historically significant artwork, Genesis, here. 
            </p>
        </div>
        <Subscribe/>
    </div>
);

export default Bottom;