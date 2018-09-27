import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Field } from 'redux-form';
import BidInput from './BidInput';

class BidFormComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <form className='artx-subscribe-form mx-auto' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <p className='text-white'>buy keys</p>
                <Field 
                    name='keys'
                    component = {BidInput}/>
                <p className='text-white'>eth</p>
                <Field 
                    name='eth'
                    component = {BidInput}/>
                <p className='text-white'>name appraisal</p>
                <Field 
                    name='appraisal'
                    component = {BidInput}/>
                <button className='text-white' type='submit'>Bid</button>
            </form>
        );
    }
}

BidFormComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const formConfiguration = {
    form: 'bid-form'
};
const hoc = reduxForm(formConfiguration)(BidFormComponent);
  
export { hoc as BidFormComponent };