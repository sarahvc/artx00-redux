import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Field } from 'redux-form';
import SubscribeBottomInput from './SubscribeBottomInput';
import SubscribeAccountInput from './SubscribeAccountInput';

class SubscribeFormComponent extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <form className='artx-subscribe-form mx-auto' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                {this.props.bottom
                    ? <div className="text-center">
                        <label className='artx-type-tw artx-gradient-text mb-4' htmlFor='subscribeEmail'>Subscribe to the ARTX email list to get updates on<br/>
                        Decentralism art auctions and ARTX airdrop!</label>
                        <div className='artx-subscribe-input artx-gradient-border-mockup d-flex justify-content-between mx-auto'>
                            <Field 
                                name='subemail'
                                component = {SubscribeBottomInput}/>
                            <button className='text-white font-weight-bold border-0 h-100 py-3 px-4' type="submit">JOIN NOW</button>
                        </div>
                    </div>
                    : <div className="d-flex justify-content-between border-bottom">
                        <Field 
                            name='subemail'
                            component = {SubscribeAccountInput}/>
                        <button className="artx-btn text-white p-2" type='submit'>Submit</button>
                    </div>
                } 
            </form>
        );
    }
}

SubscribeFormComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    bottom: PropTypes.bool
};

const formConfiguration = {
    form: 'subscribe-form'
};
const hoc = reduxForm(formConfiguration)(SubscribeFormComponent);
  
export { hoc as SubscribeFormComponent };