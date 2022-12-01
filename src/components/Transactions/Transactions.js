import {Table, Transaction} from "./Transactions.styled";
import PropTypes from 'prop-types';

export const TransactionsHistory = ({data}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({id, type, amount, currency}) => 
                    <Transaction key = {id} transactionType = {type}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>                
                    </Transaction>
                )}
            </tbody>
        </Table>);
}

TransactionsHistory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
    )),
};
