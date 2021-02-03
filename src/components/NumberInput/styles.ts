import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: ${({ theme }) => theme.space.regular};
`;

export const Package = styled.div`
    display: table;
    background-color: ${({ theme }) => theme.color.neutral_500};
    padding: 2px;
    border-radius: ${({ theme }) => theme.radius};

    & > * {
        display: table-cell;
        vertical-align: middle;
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.regular};
        line-height: ${({ theme }) => theme.font.size.large};
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.color.lightest};
    padding: ${({ theme }) => `${theme.space.small} ${theme.space.regular}`};
    cursor: pointer;
`;

export const Input = styled.input`
    color: ${({ theme }) => theme.color.neutral_900};
    padding: ${({ theme }) => `${theme.space.small} 0 ${theme.space.small} ${theme.space.normal}`};
    border: 0;
    outline: 0;
`;
