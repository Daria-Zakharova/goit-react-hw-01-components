import styled from '@emotion/styled';

export const Friends = styled.ul`
    margin: 0 auto;
    width: 400px;

    li:hover {
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }

    li:not(last-of-type) {
        margin-bottom: 10px;
    }
`;

