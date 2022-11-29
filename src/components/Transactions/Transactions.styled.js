import styled from '@emotion/styled';

const getBgColorByTransactionType = (type) => {
    switch (type.toLowerCase()) {
        case 'deposit':
            return '#51a851';
        case 'withdrawal': 
            return '#f2605b';
        case 'payment': 
            return '#ffb531';
        case 'invoice':
            return '#00c3ff';
        default:
            throw new Error('invalid transaction type')}

}

export const Table = styled.table`
    margin: 0 auto;
    width: 640px;
    border-collapse: collapse;
    text-align: center;
    text-transform: uppercase;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    background-color: #c9c7c7;
    color: #000000b0;


    thead {
        font-size: 16px;
        font-weight: 700;
        background-color: #000000b0;
        color: #fff;
    }

    tbody tr:nth-of-type(even) {
        background-color: #fffefead;
    }

    th, td {
        padding: 16px;
        width: calc(100% / 3);
        border: 1px solid #fff;
    }

    
   
`;

export const Transaction = styled.tr`

    font-weight: 500;

    td:first-of-type {        
        background-color: ${({transactionType}) => getBgColorByTransactionType(transactionType)}
    }

    td:nth-of-type(2) {
        font-weight: 400;
    }
`;
