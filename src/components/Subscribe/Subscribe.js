import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SubscribeFormComponent } from './SubscribeFormComponent';
import { subscribe } from '../state/actions/SubscribeActions';

export default class Subscribe extends Component {    
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.subscribe(values.subemail);
    }

    render () {
        return (
            <div>
                <SubscribeFormComponent onSubmit={this.onSubmit} />
            </div>  
        );
    }
}

Subscribe.propTypes = {
    subscribe: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired
};
  
const mapStateToProps = state => {
    const subscribeState = state.subscribe;
    const subscribeFetched = subscribeState.fetched;
    const subscribe = subscribeState.email;

    return { subscribeFetched, subscribe };
};

const mapDispatchToProps = dispatch => (bindActionCreators({ subscribe }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(subscribe);

// EXPORT COMPONENT

export { hoc as Subscribe };