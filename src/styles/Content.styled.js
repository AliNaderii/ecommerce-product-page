import styled from 'styled-components';

// WHOLE CONTENT CONTAINER
export const StyledContent = styled.main`
  display: flex;
  gap: 100px;
  width: 90%;
  margin: 80px auto 25px;

  /* MEDIA QUERY */
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
    gap: 0;
  }
`;