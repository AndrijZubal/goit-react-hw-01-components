import React from 'react';

import PropTypes from 'prop-types';
import TransactionItems from './TransactionItems';
import s from './Transactions.module.css';


const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>

                {items.map((item)=>(
                    <TransactionItems key={item.id} {...item}/>))}
            </tbody>

        </table>
    )
};
export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};