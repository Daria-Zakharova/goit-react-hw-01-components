import styled from "@emotion/styled";

export const FriendInfo = styled.div`
    padding: 16px;
    display: flex;
    gap: 16px;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    background-color: #ffffffcc;

    span {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${({online}) => online ? '#008000ad' : '#f74949'};
    }

    img {
        width: 72px;
        height: 72px;
    }

    p {
        flex-grow: 1;
        font-size: 24px;
        font-weight: 500;
    }
    `;