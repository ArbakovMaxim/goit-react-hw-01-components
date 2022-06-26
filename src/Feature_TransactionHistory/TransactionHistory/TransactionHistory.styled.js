import styled from '@emotion/styled';

export const Tabl = styled.table`
  width: 315px;
  margin-bottom: 20px;
  border: ${p => p.theme.borders.borderLightGray};
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
`;

export const TablTitle = styled.th`
  font-weight: ${p => p.theme.fontWeight.bold};
  background: ${p => p.theme.colors.primaryTabl};
  border: ${p => p.theme.borders.borderLightGray};
`;

export const Tablth = styled.thead`
  /*  width: 315px; */
`;

export const Tabtr = styled.tr`
  /* width: 315px; */
`;
