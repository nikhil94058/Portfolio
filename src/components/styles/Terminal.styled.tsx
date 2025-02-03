import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.75rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
`;

export const CmdNotFound = styled.div`
  margin: 0.25rem 0 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap; /* Enhances responsiveness */
  gap: 0.5rem; /* Adds spacing between elements */

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  min-width: 85%;
  padding: 0.5rem;
  border: 1px solid #f47845; /* Yellowish red border */
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors?.primary || "#F47845"};
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors?.text?.[300] || "#A0A0A0"};
`;
