import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.25rem 1.25rem 0.75rem;
  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
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
  @media (min-width: 550px) {
    display: flex;
  }
`;

// **Update** Input to remove background & border
export const Input = styled.input`
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #268bd2; /* or your preferred text color */
  font-family: 'Monaspace Neon', monospace;

  caret-color: #268bd2; /* blinking caret color */

  &:focus {
    outline: none;
    box-shadow: none;
  }

  /* Remove default autofill background in some browsers */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px transparent inset;
  }

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;
