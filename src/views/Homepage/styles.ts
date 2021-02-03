import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
`;

export const Header = styled.header`
    flex: 1;
    align-self: center;
    width: 100%;
    max-width: ${({ theme }) => theme.boundary};
`;

export const Section = styled.section`
    flex: 1;
    flex-basis: 100%;
    align-self: center;
    width: 100%;
    max-width: ${({ theme }) => theme.boundary};
    margin: ${({ theme }) => `${theme.space.regular} 0`};
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => `0 ${theme.space.regular}`};

    @media ${({ theme }) => theme.media.medium} {
        flex-direction: row;
    }
`;
export const Content = styled.div`
    margin: ${({ theme }) => `0 ${theme.space.regular}`};
`;
export const Actions = styled.div`
    margin: ${({ theme }) => `0 ${theme.space.regular}`};
`;

export const Footer = styled.footer`
    flex: 1;
    flex-basis: auto;
    align-self: stretch;
    background-color: ${({ theme }) => theme.color.neutral_300};
`;
