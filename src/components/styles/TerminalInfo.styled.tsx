import styled from "styled-components";

export const Wrapper = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
`;

export const WebsiteName = styled.span`
  color: ${({ theme }) => theme.colors?.primary || "#F47845"};
  font-weight: 600;
`;

export const User = styled.span`
  color: ${({ theme }) => theme.colors?.secondary || "#A0A0A0"};
  font-weight: 400;
`;
