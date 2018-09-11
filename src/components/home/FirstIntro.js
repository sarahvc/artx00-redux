import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayPopup from './PlayPopup';
import upcaret from '../../images/upcaret.svg';
import eth from '../../images/ethereum.svg';

export default class FirstIntro extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.setState({showPlay: true});
    // }

    // componentWillUnmount() {
    //     this.setState({showPlay: false});
    // }

    render() {
        return (
            <div className='position-relative pt-5'>
                <PlayPopup/>
                <div className='mt-5'> 
                    <p className='text-right artx-gradient-text artx-type-twf'><i>Genesis</i>, the first blockchain-based artwork is now on auction!</p>
                    <p className='artx-explaination ml-auto amy-8 text-right text-white artx-type-et'>Lot 001 <i>Genesis</i><br/><i>Genesis</i> is a crowdsourced and decentralized blockchain-based data visualization artwork that evolves in real-time. Your wallet address, bid amount and bid time will serve as data input for the creation<br/>of <i>Genesis</i>.</p>
                    <p className='text-right artx-gradient-text artx-type-fs mb-3'><img className='align-middle mr-3' src={upcaret} alt='' aria-hidden='true'/>{this.props.currentPrice}<img className='align-baseline ml-3' src={eth} alt='ethereum icon'/></p>
                </div>
            </div>
        );
    }
}

FirstIntro.propTypes = {
    currentPrice: PropTypes.number.isRequired
};