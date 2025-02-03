import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;
`;

export const EduTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.275rem;
`;

export const EduDesc = styled.div`
  color: ${({ theme }) => theme.colors?.text?.[200]};
`;
