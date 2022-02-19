import styled from 'styled-components';

// WHOLE CONTENT CONTAINER
export const StyledContent = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  justify-items: start;
  width: 90%;
  margin: 70px auto 0;
  padding: 0 150px;

  /* MEDIA QUERY */
  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 25px;
    width: 100%;
  }
`;