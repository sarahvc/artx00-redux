import React, { Component }  from 'react';
import Marquee from 'react-marquee';

export default class Middle extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className='artx-type-twf text-white mt-5'>
                <Marquee text="Max appraisal: 43472ETH&nbsp;&nbsp;&nbsp;&nbsp;Average appraisal: 23472ETH&nbsp;&nbsp;&nbsp;&nbsp;Rickyangyang's appraisal: 34059.3423ETH&nbsp;&nbsp;&nbsp;&nbsp;Alvinading's appraisal: 34059.3423ETH" hoverToStop loop/>
            </div>
        );
    }
}