import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field } from 'redux-form';
import { SubscribeInput } from './SubscribeInput';
import { subscribe } from '../state/actions/SubscribeActions';

export default class Subscribe extends Component {    
    constructor(props) {
        super(props);

        this.handleSub = this.handleSub.bind(this);
    }

    handleSub(value) {
        this.props.subscribe(value);
    }
    render () {
        return (
            <form className='artx-subscribe-form mx-auto' onSubmit={this.handleSub}>
                <div className="form-group text-center">
                    <label className='artx-type-tw artx-gradient-text mb-4' htmlFor='subscribeEmail'>Subcribe to the ARTX email list to get updates on<br/>
                    Decentralism art auctions and ARTX airdrop!</label>
                    <div className='artx-subscribe-input d-flex justify-content-between mx-auto'>
                        <Field 
                            name='subscribeemail'
                            component = {SubscribeInput}/>
                        <button className='text-white font-weight-bold border-0 h-100 py-3 px-4' type="submit">JOIN NOW</button>
                    </div>
                </div>
            </form>
        );
    }
}

Subscribe.propTypes = {
    subscribe: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired
};
  
const mapStateToProps = state => {
    const { failed, fetching, fetched, email } = state.subscribe;

    return { failed, fetching, fetched, email };
};

const mapDispatchToProps = dispatch => (bindActionCreators({ subscribe }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(subscribe);

// EXPORT COMPONENT

export { hoc as Subscribe };