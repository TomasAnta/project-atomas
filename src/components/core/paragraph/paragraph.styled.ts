import styled from "styled-components"

export const StyledParagraph = styled.h2`
  color: ${({ theme }) => theme.colors.primary.textPrimary};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  margin: 1.75rem 0;
`
