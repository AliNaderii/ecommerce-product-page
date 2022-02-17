import styled from 'styled-components';

export const StyledContent = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  justify-items: start;
  width: 90%;
  margin: 70px auto 0;
  padding: 0 150px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`;