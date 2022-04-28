import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
