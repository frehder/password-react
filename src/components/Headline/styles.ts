import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    margin: ${({ theme }) => `0 ${theme.space.regular}`};
    border-bottom: 2px solid ${({ theme }) => theme.color.neutral_300};

    & > * {
        margin: 0;
        padding: ${({ theme }) => `${theme.space.regular} 0`};
        color: ${({ theme }) => theme.color.neutral_900};
        font-size: ${({ theme }) => theme.font.size.large};

        @media ${({ theme }) => theme.media.medium} {
            padding: ${({ theme }) => `${theme.space.large} 0 ${theme.space.regular}`};
            font-size: ${({ theme }) => theme.font.size.huge};
        }
    }
`;
