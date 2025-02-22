import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const ProjectsIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5; /* unitless for better scaling with font-size */
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 1.25rem; /* adjust as needed */
  margin-bottom: 0.25rem;
`;

export const ProjectDesc = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-align: justify;
  line-height: 1.5;
  max-width: 500px;
  font-size: 1rem;
`;
