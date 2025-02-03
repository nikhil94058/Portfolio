import styled from "styled-components";

export const HelpWrapper = styled.div`
  margin: 0.25rem 0 0.75rem;
`;

export const CmdList = styled.div`
  margin-bottom: 0.25rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary || "#F47845"};
`;

export const CmdDesc = styled.span`
  color: ${({ theme }) => theme.colors?.text?.[200] || "#E1E9CC"};
  margin-bottom: 0.75rem;
  display: inline-block;

  @media (max-width: 550px) {
    display: block;
  }
`;

export const KeyContainer = styled.div`
  font-size: 0.875rem;
  margin-top: 1rem;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const KeyItem = styled.div`
  margin-top: 0.25rem;
`;
