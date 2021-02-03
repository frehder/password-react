import styled from 'styled-components';
import { TStyleType } from './index';

export const Container = styled.div`
    display: block;
    padding-bottom: ${({ theme }) => theme.space.regular};

    @media ${({ theme }) => theme.media.small} {
        display: inline-block;
        margin-right: ${({ theme }) => theme.space.regular};
        padding-bottom: 0;
    }
`;

export const Button = styled.button<{ styleType: TStyleType }>`
    display: block;
    width: 100%;
    padding: ${({ theme }) => `${theme.space.normal} ${theme.space.large}`};
    font-size: ${({ theme }) => theme.font.size.regular};
    color: ${({ theme, styleType }) => (styleType === 'primary' ? theme.color.neutral_100 : theme.color.neutral_700)};
    background-color: ${({ theme, styleType }) =>
        styleType === 'primary' ? theme.color.theme_500 : theme.color.neutral_300};
    border: 0;
    outline: 0;
    border-radius: ${({ theme }) => theme.radius};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

    @media ${({ theme }) => theme.media.small} {
        display: inline-block;
        width: auto;
    }

    &:hover {
        color: ${({ theme, styleType }) => (styleType === 'primary' ? theme.color.lightest : theme.color.neutral_900)};
        background-color: ${({ theme, styleType }) =>
            styleType === 'primary' ? theme.color.theme_300 : theme.color.neutral_300};
        transition: ${({ theme }) => theme.transition};
    }
`;
