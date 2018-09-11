import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

class WithdrawFormComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <button className='w-100 artx-btn artx-type-tw text-white amt-8 py-2' type='submit'>Withdraw</button>
            </form>
        );
    }
}

WithdrawFormComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const formConfiguration = {
    form: 'withdraw-form'
};
const hoc = reduxForm(formConfiguration)(WithdrawFormComponent);
  
export { hoc as WithdrawFormComponent };