import React from 'react';
import PropTypes from 'prop-types';

const AuctionIntro = (next) => (
    <div>
        <p className='artx-type-et text-white'>This is the real-time auction price for Genesis, which equals the sum of bids submitted by all players. Each bid gives the player a chance to guess the final Hammer Price. When the auction ends, the 3 most accurate appraisers win the Appraisal Jackpot.</p>
        <button className='btn btn-link text-warning artx-type-tw d-block mx-auto' onClick={next}>Next</button>
    </div>
);

AuctionIntro.propTypes = {
    next: PropTypes.func.isRequired
};

export default AuctionIntro;