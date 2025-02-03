import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin: 0.25rem 0 0.75rem;

  p {
    margin-top: 0.5rem;
    line-height: 1.5;
  }
`;

const BoldText = styled.span`
  font-weight: 700;
`;

export const HighlightSpan = BoldText;
export const HighlightAlt = BoldText;
