import styled from '@emotion/styled';

export const ListProfile = styled.ul`
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const InfoProfile = styled.li`
  width: 100px;
  height: 40px;
  background-color: ${p => p.theme.colors.primarySheyd};
  border: ${p => p.theme.borders.bordRed};
  text-align: center;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px; ;
`;

export const StatsName = styled.span`
  display: block;
  font-size: ${p => p.theme.fontsSizes[2]};
`;

export const StatsAmount = styled.span`
  font-size: ${p => p.theme.fontsSizes[2]};
  font-weight: ${p => p.theme.fontWeight.bold};
`;
