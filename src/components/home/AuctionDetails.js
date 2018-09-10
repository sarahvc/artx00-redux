import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from '../shared/atoms/Info';
import eth from '../../images/ethereum.svg';
import ethgreen from '../../images/ethereumgreen.svg';
import ethpurple from '../../images/ethereumpurple.svg';

export default class AuctionDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const jpWidth = {
            width: parseFloat(this.props.jackpot)/(parseFloat(this.props.jackpot) + parseFloat(this.props.rewards))*100 + '%'
        };
        return (  
            <div className='mt-5'>
                <p className='artx-type-twf artx-gradient-text'>Auction Hardcap Remaining <Info/></p>
                <p className='artx-type-twf artx-gradient-text mb-4'>{this.props.diffAppraisal}<img className='artx-eth-s align-top ml-2' src={eth} alt='ethereum icon'/></p>
                
                <div className='artx-jackpot-status'>
                    <div className='d-flex justify-content-between mb-2'>
                        <p className='artx-green artx-type-tw'>Jackpot<br/>
                            {this.props.jackpot}<img className='artx-green align-top ml-1' src={ethgreen} alt='ethereum icon'/></p>
                        <p className='artx-purple artx-type-tw'>Rewards<br/>
                            {this.props.rewards}<img className='artx-purple align-top ml-1' src={ethpurple} alt='ethereum icon'/></p>
                    </div>
                    <div className='artx-jackpot-percent d-flex w-100'>
                        <div className='h-100' style={jpWidth}></div>
                    </div>
                </div>
                
            </div>
        );
    }
}

AuctionDetails.propTypes = {
    diffAppraisal: PropTypes.number.isRequired,
    jackpot: PropTypes.number.isRequired,
    rewards: PropTypes.number.isRequired
};