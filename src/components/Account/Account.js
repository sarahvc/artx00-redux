import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAccountHead } from '../state/actions/AccountHeadActions';
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
        this.props.fetchAccountHead();
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

        console.log(this.props.failed);
        console.log(this.props.fetching);
        console.log(this.props.fetched);

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
                                            <input type="text" readOnly className="artx-type-tw text-white border-0 w-100" id="artxWAd" value={this.props.head.address}/>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="artxAE" className="artx-type-twf text-white artx-yellow-dot">Email</label>
                                        { editEmail
                                            ? <SubscribeAccount/>
                                            : <div className="d-flex justify-content-between border-bottom">
                                                <input type="text" readOnly  className="artx-type-tw text-white border-0 w-100" id="artxAN" value={this.props.head.email}/>
                                                <button className="artx-icon-btn" onClick={this.changeEmail} aria-label='edit account name' type='button'>
                                                    <i className="far fa-edit artx-type-twf artx-gradient-text"></i>
                                                </button>
                                            </div>}
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="artxRL" className="artx-type-twf text-white">Personal Referral Link</label>
                                        {
                                            this.props.head.code
                                                ?<ReferLink link={this.props.head.code} account={true}/>
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
                                            <AccountTR label='Bid' content='0'/>
                                            <AccountTR label='Shares' content='0'/>
                                            <AccountTR label='Referral' content='0'/>
                                            <AccountTR label='Total Earnings' content='0'/>
                                            <AccountTR label='Withdrawn' content='0'/>
                                            <AccountTR label='Available for withdraw' content='0'/>
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
    fetchAccountHead: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    head: PropTypes.object,
};
  
const mapStateToProps = state => {
    const { failed, fetching, fetched, head } = state.accountHead;

    return { failed, fetching, fetched, head };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchAccountHead }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Account);

// EXPORT COMPONENT

export { hoc as Account };