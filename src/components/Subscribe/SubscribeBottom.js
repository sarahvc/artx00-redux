import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SubscribeFormComponent } from './SubscribeFormComponent';
import { subscribeToARTX } from '../state/actions/SubscribeActions';

class SubscribeBottom extends Component {    
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.subscribeToARTX(values.subemail);
    }

    render () {
        return (
            <div className='position-relative'>
                <SubscribeFormComponent onSubmit={this.onSubmit} bottom/>
                {this.props.subscribeFetched && <p className='position-absolute'>Success</p>}
            </div>  
        );
    }
}

SubscribeBottom.propTypes = {
    subscribeToARTX: PropTypes.func.isRequired,
    subscribeFetched: PropTypes.bool.isRequired,
    subscribeEmail: PropTypes.string
};
  
const mapStateToProps = state => {
    const subscribeState = state.subscribeTo;
    const subscribeFetched = subscribeState.fetched;
    const subscribeEmail = subscribeState.useremail;

    return { subscribeFetched, subscribeEmail };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ subscribeToARTX }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(SubscribeBottom);

// EXPORT COMPONENT

export { hoc as SubscribeBottom };