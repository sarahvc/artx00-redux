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
                <p className='text-white'>{this.props.buyprice}</p>
                <p className='text-white'>name appraisal</p>
                <Field 
                    name='appraisal'
                    component = {BidInput}/>
                <p className='text-white'>refer code</p>
                {
                    this.props.rfcode
                        ?<Field 
                            name='rfcode'
                            component = {BidInput}
                            value = {this.props.rfcode}
                        />
                        :<Field 
                            name='rfcode'
                            component = {BidInput}
                        />
                }
                <button className='text-white' type='submit'>Bid</button>
            </form>
        );
    }
}

BidFormComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    buyprice: PropTypes.string.isRequired,
    rfcode: PropTypes.string
};

const formConfiguration = {
    form: 'bid-form'
};
const hoc = reduxForm(formConfiguration)(BidFormComponent);
  
export { hoc as BidFormComponent };