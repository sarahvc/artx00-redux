import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithdrawForm } from './WithdrawForm';
import { withdrawToWallet } from '../state/actions/WithdrawActions';

class Withdraw extends Component {    
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.withdrawToWallet();
    }

    render () {
        return (
            <div>
                <WithdrawForm onSubmit={this.onSubmit}/>
            </div>  
        );
    }
}

Withdraw.propTypes = {
    withdrawToWallet: PropTypes.func.isRequired,
    withdrawSuccessed: PropTypes.bool.isRequired
};
  
const mapStateToProps = state => {
    const withdrawState = state.withdrawTo;
    const withdrawSuccessed = withdrawState.fetched;

    return { withdrawSuccessed };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ withdrawToWallet }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Withdraw);

// EXPORT COMPONENT

export { hoc as Withdraw };