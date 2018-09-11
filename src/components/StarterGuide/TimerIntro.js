import React from 'react';
import PropTypes from 'prop-types';

const TimerIntro = (next) => (
    <div>
        <p className='artx-type-et text-white'>This is the difference between the hardcap and the current price. It will serve as the timer for the auction. The hardcap starts high and decreases over time. The auction ends once the accumulated sales of Genesis shares reach or exceed the hardcap.</p>
        <button className='btn btn-link text-warning artx-type-tw d-block mx-auto' onClick={next}>Next</button>
    </div>
);

TimerIntro.propTypes = {
    next: PropTypes.func.isRequired
};

export default TimerIntro;