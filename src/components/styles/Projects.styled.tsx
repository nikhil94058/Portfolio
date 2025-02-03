import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin: 0.5rem 0 0.875rem;
`;

export const ProjectsIntro = styled.div`
  margin: 0.5rem 0 1rem;
  line-height: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.colors?.text?.[200] || "#E1E9CC"};
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
`;
