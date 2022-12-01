import styled from '@emotion/styled';

export const Stats = styled.ul`
    margin: 0 auto;
    width: ${({numberOfItems}) => `calc(80px*${numberOfItems})`};
    height: 80px;
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    color: #fff;

    li {
        padding: 15px;
        width: ${({numberOfItems}) => `calc(100%/${numberOfItems})`};
        display: flex;
        flex-direction: column;
        font-size: 14px;
        text-align: center;
        justify-content: center;
        background-color: #000000c7;

        span:last-of-type {
            margin-top: 8px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    li:nth-of-type(odd) {
        background-color: #fe4f60;
    }

    li:hover {
        opacity: .9;
    }

    `;
