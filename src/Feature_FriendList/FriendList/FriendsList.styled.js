import styled from '@emotion/styled';

export const FriendList = styled.ul`
  padding: ${p => p.theme.space[0]}px;
  width: auto;
  height: auto;
  text-align: center;
  list-style: none;
`;

export const FriendListItem = styled.li`
  width: 200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[3]}px;
  align-items: center;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  box-shadow: -10px 10px 10px black;
  height: 70px;
`;

export const Status = styled.span`
  margin-left: ${p => p.theme.space[2]}px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* background-color: ${p => p.theme.colors.green}; */
`;

/* export const StatusOffline = styled.span`
  margin-left: ${p => p.theme.space[2]}px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.red};
`; */

export const Avatar = styled.img`
  margin-left: ${p => p.theme.space[3]}px;
`;

export const Name = styled.p`
  margin-left: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontsSizes[2]};
`;
