import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: ${({ theme }) => theme.space.regular};
`;

export const Label = styled.label`
    position: relative;
    z-index: 100;
    display: inline-block;
    color: ${({ theme }) => theme.color.neutral_900};
    font-size: ${({ theme }) => theme.font.size.regular};
    padding: ${({ theme }) => `0 ${theme.space.normal} 0 0`};
    line-height: ${({ theme }) => theme.space.large};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

    &:hover input:after {
        border-color: ${({ theme }) => theme.color.neutral_700};
        transition: ${({ theme }) => theme.transition};
    }
`;

export const Input = styled.input`
    font-size: ${({ theme }) => theme.font.size.regular};
    margin-right: ${({ theme }) => theme.space.regular};
    cursor: pointer;

    &:after {
        content: '';
        font-family: sans-serif;
        position: absolute;
        z-index: 300;
        top: 6px;
        left: 0;
        width: ${({ theme }) => theme.font.size.large};
        height: ${({ theme }) => theme.font.size.large};
        color: ${({ theme }) => theme.color.lightest};
        font-size: ${({ theme }) => theme.font.size.regular};
        line-height: ${({ theme }) => theme.font.size.large};
        text-align: center;
        background-color: ${({ theme }) => theme.color.neutral_500};
        border: 2px solid ${({ theme }) => theme.color.neutral_500};
        border-radius: ${({ theme }) => theme.radius};
        transition: ${({ theme }) => theme.transition};
        cursor: pointer;
        pointer-events: none;
    }

    &:checked:after {
        content: 'x';
    }

    &:hover:after,
    &:focus:after {
        border-color: ${({ theme }) => theme.color.neutral_700};
        transition: ${({ theme }) => theme.transition};
    }
`;
