import styled from '@emotion/styled';

export const UserInfo = styled.div`
  text-align: center;
`;

export const ImgInfo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: ${p => p.theme.borderRadius.circle};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontsSizes[4]};
  font-weight: ${p => p.theme.fontWeight.bold}; ;
`;

export const UserTag = styled.p`
  font-size: ${p => p.theme.fontsSizes[2]};
`;

export const UserLocation = styled.p`
  font-size: ${p => p.theme.fontsSizes[2]};
`;
