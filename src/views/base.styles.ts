import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    html {
        scroll-behavior: smooth;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        color: ${({ theme }) => theme.color.neutral_900};
        font: ${({ theme }) => `${theme.font.weight.regular} ${theme.font.size.regular} ${theme.font.family}`};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.color.lightest};
    }

    a {
        color: ${({ theme }) => theme.color.neutral_900};
        text-decoration: none;
        transition: ${({ theme }) => theme.transition};

        &:hover, &:focus {
            color: ${({ theme }) => theme.color.theme_700};
            transition: ${({ theme }) => theme.transition};
        }
    }
`;
