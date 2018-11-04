import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAccountDetails } from '../state/actions/AccountDetailsActions';
import { SubscribeAccount } from '../Subscribe/SubscribeAccount';

import AccountTR from './AccountTR';
import ReferLink from '../shared/atoms/ReferLink';
import ShareTo from '../shared/atoms/ShareTo';
import { Withdraw } from './Withdraw';


class Account extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            eidtEmail: false,
            isOpen: false,
            isFullHeight: false
        };

        this.changeEmail = this.changeEmail.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleAccount = this.toggleAccount.bind(this);
    }

    changeEmail() {
        this.setState(prevState => ({editEmail: !prevState.editEmail}));
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        } else {
            this.toggleAccount(false);
        }
    }

    toggleAccount(bol) {
        if (bol === true) {
            this.setState({isOpen: true});
            this.setState({isFullHeight: true});
        } else {
            this.setState({isFullHeight: false});
            setTimeout(() => { 
                this.setState({isOpen: false});
            }, 500);
        }
    }

    componentDidMount() {
        this.props.fetchAccountDetails();
    }

    componentDidUpdate() {
        if (this.state.isOpen === true) {
            document.addEventListener('mousedown', this.handleClick, false);
        } else {
            document.removeEventListener('mousedown', this.handleClick, false);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }


    render() {
        const {editEmail, isOpen, isFullHeight } = this.state;
        
        const accountStyle = isFullHeight ?
            {
                maxHeight: 'calc(100vh - 65px)',
                overflow: 'scroll'
            }:
            {
                maxHeight: '0',
                overflow: 'hidden'
            };

        return (
            <div>
                <button className='border-0 bg-transparent' type='button' onClick={() => this.toggleAccount(true)}><i className="far fa-user artx-gradient-text artx-type-twf"></i><span className='artx-gradient-text artx-type-twf d-none d-lg-inline'> Personal Account</span></button>
                {
                    isOpen
                        ? <div className='artx-account-container position-absolute artx-gradient-outter' style={accountStyle} ref={node => this.node = node}>
                            <div className='artx-gradient-inner ap-8'>
                                <button type="button" className="d-block ml-auto artx-icon-btn" aria-label="Close" onClick={() => this.toggleAccount(false)}>
                                    <i className="fas fa-times artx-type-twf artx-gradient-text"></i>
                                </button>
                                <div className='mt-2'>
                                    <div>
                                        <label  htmlFor="artxWA" className="artx-type-twf text-white">Wallet Address</label>
                                        <div className="border-bottom">
                                            <input type="text" readOnly className="artx-type-tw text-white border-0 w-100" id="artxWAd" value={this.props.details.account.slice(0, 3) + '...' + this.props.details.account.slice(-3)}/>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="artxAE" className="artx-type-twf text-white artx-yellow-dot">Email</label>
                                        { editEmail
                                            ? <SubscribeAccount/>
                                            : <div className="d-flex justify-content-between border-bottom">
                                                <input type="text" readOnly  className="artx-type-tw text-white border-0 w-100" id="artxAN" value={this.props.details.email}/>
                                                <button className="artx-icon-btn" onClick={this.changeEmail} aria-label='edit account name' type='button'>
                                                    <i className="far fa-edit artx-type-twf artx-gradient-text"></i>
                                                </button>
                                            </div>}
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="artxRL" className="artx-type-twf text-white">Personal Referral Link</label>
                                        {
                                            this.props.details.code
                                                ?<ReferLink link={this.props.details.code} account={true}/>
                                                :<p className='text-white'>no code yet</p>
                                        }
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <p className='artx-type-tw text-white mr-2'>Share to</p>
                                        <ShareTo/>
                                    </div>
                                    <table className='mt-2'>
                                        <thead className="sr-only">
                                            <tr>
                                                <th>User profile item</th>
                                                <th>User profile content</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <AccountTR label='Bid' content={'1234'}/>
                                            <AccountTR label='Shares' content={this.props.details.shares}/>
                                            <AccountTR label='Referral' content={this.props.details.referralEarnings}/>
                                            <AccountTR label='Total Earnings' content={this.props.details.totalEarnings}/>
                                            <AccountTR label='Withdrawn' content={this.props.details.totalEarnings - this.props.details.availabelEarnings}/>
                                            <AccountTR label='Available for withdraw' content={this.props.details.availabelEarnings}/>
                                        </tbody>
                                    </table>
                                    <Withdraw/>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        );
    }
}

Account.propTypes = {
    fetchAccountDetails: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    details: PropTypes.object
};
  
const mapStateToProps = state => {
    const { failed, fetching, fetched, details } = state.accountDetails;

    return { failed, fetching, fetched, details};
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchAccountDetails }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Account);

// EXPORT COMPONENT

export { hoc as Account };