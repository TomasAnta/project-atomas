import styled from "styled-components"

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.primary.textSecondary};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.bg};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin: 0.5rem 0;
`
