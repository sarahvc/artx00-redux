import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withdraw } from '../state/actions/WithdrawActions';

import WithdrawFormComponent from './WithdrawFormComponent';

class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.onWithdrawSubmit = this.onWithdrawSubmit.bind(this);
    }

    onWithdrawSubmit() {
        this.props.withdraw(this.props.publicWalletAddress);
    }

    render() {
        return (
            <WithdrawFormComponent onSubmit={this.onSubmit} />
        );
    }
}

Withdraw.propTypes = {
    withdraw: PropTypes.func.isRequired,
    publicWalletAddress: PropTypes.string.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired
};
  
const mapStateToProps = state => {
    const withdrawState = state.withdraw;
    const withdrawFetched = withdrawState.fetched;
    const withdraw = withdrawState.transaction;

    return { withdrawFetched, withdraw };
};

const mapDispatchToProps = dispatch => (bindActionCreators({ withdraw }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(withdraw);

// EXPORT COMPONENT

export { hoc as Withdraw };