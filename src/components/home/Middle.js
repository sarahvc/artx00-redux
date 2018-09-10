import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Marquee from 'react-marquee';

export default class Middle extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className='artx-type-twf text-white mt-5'>
                <Marquee text={this.props.text} hoverToStop loop/>
            </div>
        );
    }
}

Middle.propTypes = {
    text: PropTypes.string.isRequired
};