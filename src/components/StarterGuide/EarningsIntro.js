import React from 'react';
import PropTypes from 'prop-types';

const EarningsIntro = (next) => (
    <div>
        <p className='artx-type-et text-white'>Players earn dividends from the auction by bidding and buying shares of Genesis. The price of each share will increase slowly over time. The earlier you bid, the more dividends you earn!</p>
        <button className='btn btn-link text-warning artx-type-tw d-block mx-auto' onClick={next}>Next</button>
    </div>
);

EarningsIntro.propTypes = {
    next: PropTypes.func.isRequired
};

export default EarningsIntro;