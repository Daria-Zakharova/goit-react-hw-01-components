import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    margin: 0 auto;
    width: 280px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Info = styled.div`
    padding: 30px;
    text-align: center;
    background-color: #ffffffcc;

    img {
        margin: 0 auto 30px;
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 2px -2px, rgb(0 0 0 / 14%) 0px 3px 2px 0px, rgb(0 0 0 / 12%) 0px -1px 2px 0px;
        transition: transform linear 300ms;
    }

    img:hover {
        transform: rotate(180deg);
    }

    p {
        margin: 0 auto 10px;
        font-size: 16px;
        color: grey;
    }

    p:first-of-type {
        font-weight: 700;
        font-size: 20px;
        color: #000000c7;
    }
`;


export const Stats = styled.ul`
    height: 80px;
    padding: 2px 0 0;
    display: flex;
    gap: 2px;
    background-color: #cf4552;


    li {
        padding: 20px 10px;
        width: calc((100% - 4px)/ 3);
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        background-color: #fe4f60;
        color: #fff;

        span:last-of-type {
            font-size: 16px;
            font-weight: 700;
            color: #000000c7;
        }
    }
`;
