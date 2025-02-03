import styled from "styled-components";

export const ThemesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adds spacing between items, easier to manage than individual margin rules */
  justify-content: flex-start; /* Ensures the items align to the left on larger screens */

  @media (max-width: 550px) {
    justify-content: center; /* Centers items on small screens */
  }
`;

export const ThemeSpan = styled.span`
  margin-right: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;

  @media (max-width: 550px) {
    font-size: 0.875rem; /* Slightly smaller font on mobile for better fit */
    margin-right: 0.5rem; /* Reduces spacing on small screens */
  }
`;
