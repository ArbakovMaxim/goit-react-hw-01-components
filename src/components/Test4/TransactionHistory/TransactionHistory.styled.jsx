import styled from '@emotion/styled';

export const Tabl = styled.table`
  width: 315px;
  margin-bottom: 20px;
  border: ${p => p.theme.borders.test3};
  border-collapse: collapse;
`;

export const TablTitle = styled.th`
  font-weight: ${p => p.theme.fontWeight.test1};
  background: ${p => p.theme.colors.bgtabl};
  border: ${p => p.theme.borders.test3};
`;

export const Tablth = styled.thead`
  /*  width: 315px; */
`;

export const Tabtr = styled.tr`
  /* width: 315px; */
`;
