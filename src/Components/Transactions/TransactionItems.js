import React from 'react';
import PropTypes from 'prop-types';
import  './Transactions.module.css'

const TransactionItems = ({ amount, currency, type }) => {
    return (
            <tr >
            <td>{type}</td>
            <td>{currency}</td>
            <td>{amount}</td>
            </tr>

    );
};
export default TransactionItems;

TransactionItems.propTypes = {
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,

}
