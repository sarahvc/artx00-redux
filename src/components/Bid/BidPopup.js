import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { placeBid } from '../state/actions/PlaceBidActions';
import isEmpty from 'lodash/isEmpty';

import ReferLink from '../shared/atoms/ReferLink';
import ShareTo from '../shared/atoms/ShareTo';
import Info from '../shared/atoms/Info';
import eth from '../../images/ethereum.svg';

class BidPopup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            //??should these be props or states??
            referred: true,
            amount: 'xxx.xx',
            //inside component
            step: 1,
            isOpen: false
        };

        this.bidSteps = this.bidSteps.bind(this);
        this.closeBid = this.closeBid.bind(this);
        this.setStep = this.setStep.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }

    // onSubmit(values) {
    //     this.props.placeBid(values);
    // }

    bidSteps(s, b, web3, mmaccount) {
        const { amount } = this.state;
        switch(s) {
            case 1:
                return (
                    <div className='mx-auto'>
                        {
                            web3
                                ? <p className='artx-type-twf text-center text-warning'>It seems that you are using a browser without Web3 capabilities. Please make sure that you are using a web3-capable browser like mist or parity. If you are using MetaMask or Parity extension, make sure that it is enabled.</p>
                                : mmaccount
                                    ? <p className='artx-type-twf text-center text-warning'>Please login to your Metamask first</p>
                                    : <div>
                                        <p className='artx-type-tw text-center artx-gradient-text mb-4'>Bid <i>Genesis</i> shares earlier and earn more dividends! <Info/></p>
                                        <div className='form-group text-center mb-4 '>
                                            <input className='artx-bid-input artx-type-tw text-white mr-2' type='number' id='artxShares'/>
                                            <label className='artx-type-twf text-white' htmlFor='artxShares'>Shares = <span>{amount}</span><img className='artx-eth-s align-baseline ml-2' src={eth} alt='ethereum icon'/></label>
                                        </div>
                                        <div className='artx-shares-btn text-center amb-9'>
                                            <button className="mr-4">
                                                <span className='d-inline-block px-4 py-1'>
                                                    <span className='artx-type-twf artx-gradient-text'>1X
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="mr-4">
                                                <span className='d-inline-block px-4 py-1'>
                                                    <span className='artx-type-twf artx-gradient-text'>10X
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="mr-4">
                                                <span className='d-inline-block px-4 py-1'>
                                                    <span className='artx-type-twf artx-gradient-text'>100X
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="mr-4">
                                                <span className='d-inline-block px-4 py-1'>
                                                    <span className='artx-type-twf artx-gradient-text'>AVE
                                                    </span>
                                                </span>
                                            </button>
                                            <button className="mr-4">
                                                <span className='d-inline-block px-4 py-1'>
                                                    <span className='artx-type-twf artx-gradient-text'>MAX
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                        <button className="d-block mx-auto artx-btn artx-type-tw text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>Next</button>
                                    </div>
                        }
                    </div>
                );
            case 2:
                return (
                    <div className='mx-auto artx-bid-content'>
                        <p className='artx-type-tw artx-gradient-text amt-8 mb-1'>Now, guess the final hammer price of <i>Genesis</i>!</p>
                        <p className='artx-type-tw artx-gradient-text amb-8'>The top 3 most accurate appraisers will win the <b>Appraisal Jackpot</b>!</p>
                        <div className='text-center amb-18'>
                            <label className='artx-type-twf text-white mb-1' htmlFor='artxA'>Your Appraisal</label>
                            <input className='artx-bid-input artx-type-tw text-white ml-2' type='number' id='artxA' aria-describedby='artxAU'/>
                            <img className='artx-eth-s align-text-bottom ml-2' src={eth} alt='ethereum icon'/>
                        </div>
                        <button className="d-block mx-auto artx-btn artx-type-tw text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>Next</button>  
                    </div>
                );
            case 3:
                if (b === true) {
                    return (
                        <div className='mx-auto artx-bid-content'>
                            <p className='artx-type-twf artx-gradient-text mb-4'>Good news! You will receive a 10% bonus because you are referred by a friend!</p>
                            <p className='artx-type-twf text-center text-warning amb-8'>NOTICE:  Login to Metamask to try again!</p>
                            <button className="d-block mx-auto artx-btn artx-type-tw text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>Bid</button>
                        </div>
                    );
                } else {
                    return (
                        <div className='mx-auto artx-bid-content'>
                            <p className='artx-type-tw artx-gradient-text mb-1'>Last step!</p>
                            <p className='artx-type-tw artx-gradient-text mb-3'>If someone refered you, please enter their referral link to receive a 10% ETH bonus!<Info/></p>
                            <div className='mb-3'>
                                <label className='artx-type-tw text-white' htmlFor='artxRLFI'>Referral Link</label>
                                <input className='artx-bid-input-s artx-type-et text-white mx-2' id='artxRLFI' aria-describedby='artxRFLIO'/>
                                <span className='artx-type-tw text-white' id='artxRFLIO'>(Optional)</span>
                            </div>
                            <p className='text-center artx-type-twf text-warning amb-8'>NOTICE:  Login to Metamask to try again!</p>
                            <button className='d-block mx-auto artx-btn artx-type-tw text-center text-white py-2 apx-13' type='button' onClick={() => this.setStep(1)}>Bid</button>
                        </div>
                    );
                }
            case 4:
                return (
                    <div className='mx-auto'>
                        <h3 className='text-center artx-type-ths artx-gradient-text mb-2'>Congratulations!</h3>
                        <p className='text-center artx-type-et text-white mb-1'>Your bid has been submitted to blockchain.</p>
                        <p className='text-center artx-type-et text-white amb-8'>Check your <b>Personal Account</b> to see your status anytime!</p>
                        <p className='text-center artx-type-et artx-gradient-text mb-1'>Here is your <b>Personal Referral Link</b>.<Info/></p>
                        <p className='text-center artx-type-et artx-gradient-text mb-1'>Share it with friends and win 10% of their bids!</p>
                        <p className='text-center artx-type-et artx-gradient-text'>The more you refer, the more you earn!</p>
                        <div className='d-flex justify-content-center amb-9'>
                            <ReferLink link='uadsfafadf' account='false'/>
                            <ShareTo/>
                        </div>
                        <div className='text-center'>
                            <label className='artx-type-et text-white mb-4' htmlFor='subscribeEmail'>Enter your email to receive ARTX airdrop invitations and auction game updates!</label>
                        </div>
                        <div className='artx-subscribe-input mx-auto amb-8'>
                            <input className='artx-type-tw py-3 pl-4 text-white border-0' type='email' id='subscribeEmail' placeholder='Email'/>
                        </div>
                        <button type='button' className='d-block mx-auto artx-btn artx-type-tw text-center text-white py-2 apx-13' onClick={() => this.closeBid(true)}>Finish</button>
                    </div>
                );
            default:
                return null;
        }
    }

    closeBid(sub) {
        this.setState({isOpen: false, step: 1});
        if (sub) {
            this.props.placeBid('asdfasd');
        }
    }

    setStep(num) {
        this.setState(prevState => ({step: prevState.step + num}));
    }

    render() {
        const endsStep = this.state.step === 1 || this.state.step === 4 ? true : false; 
        const progBarWidth = this.state.step === 4
            ? { width: '0px'}
            : { width: (1 - this.state.step/3) * 100 + '%' };
        const {referred, step, isOpen} = this.state;


        const web3 = window.web3;
        let failed = false;
        let noWeb3 = null;
        let noAccount = null;
    
        if (!web3) {
            failed = true;
            noWeb3 = true;
        }
    
        if (!failed && isEmpty(this.props.accounts)) {
            failed = true;
            noAccount = true;
        }

        return (
            <div>
                <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14' onClick={() => this.setState({isOpen: true})}>Bid <i className="fas fa-gavel"></i></button>
                { isOpen
                    ? <div className='artx-bid-container position-absolute artx-gradient-outter'>
                        <div className='artx-progress-bar ml-auto' style={progBarWidth}></div>
                        <div className='artx-gradient-inner pt-4 apb-14 w-100'>
                            {
                                endsStep
                                    ?
                                    <button type="button" className="d-block ml-auto amr-9 artx-icon-btn" aria-label="Close" onClick={this.closeBid}>
                                        <i className="fas fa-times artx-type-twf artx-gradient-text"></i>
                                    </button>
                                    : <div className='d-flex justify-content-between amx-9'>
                                        <button type="button" className='artx-icon-btn' aria-label='Go back to previous step' onClick={() => this.setStep(-1)}>
                                            <i className="artx-type-twf fas fa-chevron-left artx-gradient-text"></i>
                                        </button>
                                        <button type="button" className="artx-icon-btn" aria-label="Close" onClick={this.closeBid}>
                                            <i className="fas fa-times artx-type-twf artx-gradient-text"></i>
                                        </button>
                                    </div>
                            }
                            <form>
                                {this.bidSteps(step, referred, noWeb3, noAccount)}
                            </form>
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}

BidPopup.propTypes = {
    placeBid: PropTypes.func.isRequired,
    accounts_fetched: PropTypes.bool.isRequired,
    account_selected: PropTypes.string,
    //network_fetched: PropTypes.bool.isRequired,
    //network_id: PropTypes.string,
    accounts: PropTypes.array,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    pool: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { accounts, accounts_fetched, account_selected } = state.accounts;
    //const { network_fetched, network_id } = state.network;
    const { failed, fetching, fetched, pool } = state.placeBid;
  
    //return { accounts, accounts_fetched, account_selected, network_fetched, network_id, failed, fetching, fetched, pool };
    return { accounts, accounts_fetched, account_selected, failed, fetching, fetched, pool };
};
  
const mapDispatchToProps = dispatch => (
    bindActionCreators({ placeBid }, dispatch)
);
  
const hoc = connect(mapStateToProps, mapDispatchToProps)(placeBid);
  
// EXPORT COMPONENT
  
export { hoc as BidPopup };