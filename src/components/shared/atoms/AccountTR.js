import React from 'react';
import PropTypes from 'prop-types';

const AccountTR = ({label, content}) => {
    return (
        <tr>
            <th className='artx-type-twf text-white py-2 pr-5'>{label}</th>
            <td className='artx-type-twf text-white text-right py-2'>{content}ETH</td>
        </tr>
    )
};

export default AccountTR;

AccountTR.propTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}