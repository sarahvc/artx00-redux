import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

class WithdrawForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onSubmit = this.props.onSubmit,
            handleSubmit = this.props.handleSubmit;
        return (
            <div>
                <form className="create-pool-form" onSubmit={handleSubmit(onSubmit)}>
                    <button
                        type="submit"
                        className="w-100 artx-btn artx-type-tw text-white amt-8 py-2"
                    >
                    Withdraw
                    </button>
                </form>
            </div>
        );
    }
}

WithdrawForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

const formConfiguration = {
    form: 'withdraw-form'
};
const hoc = reduxForm(formConfiguration)(WithdrawForm);

export { hoc as WithdrawForm };
