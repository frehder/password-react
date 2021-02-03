import styled from 'styled-components';

export const Container = styled.div`
    padding: ${({ theme }) => `${theme.space.normal} ${theme.space.regular}`};
    max-width: ${({ theme }) => theme.boundary};
    margin: 0 auto;
`;

export const Text = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.neutral_700};
    font-size: ${({ theme }) => theme.font.size.small};
`;
