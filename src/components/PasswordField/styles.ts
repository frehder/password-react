import styled from 'styled-components';

// NOTE: width: calc(100% - (2 * border + 2 * padding))
export const Field = styled.input`
    width: ${({ theme }) => `calc(100% - (4px + ${parseInt(theme.space.regular) * 2}px}))`};
    margin-bottom: ${({ theme }) => theme.space.regular};
    padding: ${({ theme }) => theme.space.regular};
    color: ${({ theme }) => theme.color.neutral_900};
    font-size: ${({ theme }) => theme.font.size.large};
    border: 2px solid ${({ theme }) => theme.color.neutral_500};
    border-radius: ${({ theme }) => theme.radius};
    transition: ${({ theme }) => theme.transition};
    outline: 0;

    @media ${({ theme }) => theme.media.medium} {
        width: 62%;
    }

    &:focus {
        border-color: ${({ theme }) => theme.color.theme_500};
        transition: ${({ theme }) => theme.transition};
    }

    &::selection {
        background: ${({ theme }) => theme.color.neutral_300};
    }

    &::-moz-selection {
        background: ${({ theme }) => theme.color.neutral_300};
    }
`;
