import React, { Component } from 'react';
//import { BidPopup } from './BidPopup';
//import PlayPopup from './PlayPopup';
import Info from '../shared/atoms/Info';
import upcaret from '../../images/upcaret.svg';
import eth from '../../images/ethereum.svg';
import ethgreen from '../../images/ethereumgreen.svg';
import ethpurple from '../../images/ethereumpurple.svg';

export default class Above extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            //api
            diffAppraisal: '92347.283',
            currentPrice: '6543.826',
            jackpot: '34059.3423', 
            rewards: '34059.3423',
            //inner state
            showPlay: false
        };
        this.closePlay = this.closePlay.bind(this);
    }

    componentDidMount() {
        this.setState({showPlay: true});
    }

    componentWillUnmount() {
        this.setState({showPlay: false});
    }

    closePlay() {
        this.setState({showPlay: false});
    }
    render() {
        const jpWidth = {
            width: parseFloat(this.state.jackpot)/(parseFloat(this.state.jackpot) + parseFloat(this.state.rewards))*100 + '%'
        };
        const { diffAppraisal, currentPrice, jackpot, rewards, showPlay } = this.state;
        return (
            <div className='position-relative pt-5'>
                {
                    showPlay && <div className='art-play-container position-absolute mx-auto artx-gradient-outter'>
                        <div className='artx-gradient-inner ap-9'>
                            <p className='artx-type-et text-white'>ARTX AI will create <i>Genesis</i>, a digital artwork, using blockchain-based transaction data from the auction. <i>Genesis</i> is probably the most expensive and important artwork created on blockchain! Don&apos;t miss your chance to be a part of history!</p>
                            <button className='d-block mx-auto btn btn-link text-warning artx-type-twf' onClick={this.closePlay}>Play Now</button>
                        </div> 
                    </div>
                }
                <div className='my-5'> 
                    <p className='text-right artx-gradient-text artx-type-twf'><i>Genesis</i>, the first blockchain-based artwork is now on auction!</p>
                    <p className='artx-explaination ml-auto amy-8 text-right text-white artx-type-et'>Lot 001 <i>Genesis</i><br/><i>Genesis</i> is a crowdsourced and decentralized blockchain-based data visualization artwork that evolves in real-time. Your wallet address, bid amount and bid time will serve as data input for the creation<br/>of <i>Genesis</i>.</p>
                    <p className='text-right artx-gradient-text artx-type-sf mb-3'><img className='align-middle mr-3' src={upcaret} alt='' aria-hidden='true'/>{currentPrice}<img className='align-baseline ml-3' src={eth} alt='ethereum icon'/></p>
                    <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14'>Bid <i className="fas fa-gavel"></i></button>
                </div>
                <div>
                    <p className='artx-type-twf artx-gradient-text'>Auction Hardcap Remaining <Info/></p>
                    <p className='artx-type-twf artx-gradient-text mb-4'>{diffAppraisal}<img className='artx-eth-s align-top ml-2' src={eth} alt='ethereum icon'/></p>
                    
                    <div className='artx-jackpot-status'>
                        <div className='d-flex justify-content-between mb-2'>
                            <p className='artx-green artx-type-tw'>Jackpot<br/>
                                {jackpot}<img className='artx-green align-top ml-1' src={ethgreen} alt='ethereum icon'/></p>
                            <p className='artx-purple artx-type-tw'>Rewards<br/>
                                {rewards}<img className='artx-purple align-top ml-1' src={ethpurple} alt='ethereum icon'/></p>
                        </div>
                        <div className='artx-jackpot-percent d-flex w-100'>
                            <div className='h-100' style={jpWidth}></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

}