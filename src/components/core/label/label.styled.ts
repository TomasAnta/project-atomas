import styled from "styled-components"

export const LabelContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary.secondaryBackground};
  flex-direction: column;
  justify-content: center;
  padding: 0.31rem 0.62rem;
  width: max-content;
  border-radius: 1rem;
`

export const LabelText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary.textHover};
`
