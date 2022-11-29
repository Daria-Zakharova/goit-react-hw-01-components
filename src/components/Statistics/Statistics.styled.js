import styled from '@emotion/styled';

export const Section = styled.section`
    padding: 0 0 80px;
    background-color: ${({color}) => color};
    `;

export const SectionTitle = styled.h2`
    margin: 0 auto 80px;
    padding: 40px;    
    background-color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    `;

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
        background-color: #000000c7;

        span:last-of-type {
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
