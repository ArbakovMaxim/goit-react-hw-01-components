import styled from '@emotion/styled';

export const StatInfo = styled.ul`
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  display: block;
  justify-content: center;
  width: 65px;
  height: 50px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.test2Text};
  display: flex;
  justify-content: center;
`;

export const Percentage = styled.span`
  color: ${p => p.theme.colors.test2Text};
  margin-top: ${p => p.theme.space[1]}px;
  display: flex;
  justify-content: center;
`;
