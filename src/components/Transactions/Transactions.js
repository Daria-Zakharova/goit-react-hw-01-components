import { Section, SectionTitle} from "../Statistics/Statistics.styled";
import {Table, Transaction} from "./Transactions.styled";
import PropTypes from 'prop-types';

export const TransactionsHistory = ({data}) => {
    return <Section>
        <SectionTitle>History of transactions</SectionTitle>
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
        </Table>
    </Section>;
}

TransactionsHistory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }
    )),
};
