import styled from "styled-components";

export const OutputContainer = styled.div`
  padding-bottom: 0.25rem;
`;

export const Wrapper = styled.div`
  margin: 0.25rem 0 0.75rem;
`;

export const UsageDiv = styled.div<{ marginY?: boolean }>`
  margin: ${({ marginY }) =>
    marginY ? "0.75rem 0 0.75rem" : "0.25rem 0 0.75rem"};
  line-height: 1.5rem;
`;
