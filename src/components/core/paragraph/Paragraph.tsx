import React from "react"

import { StyledParagraph } from "./paragraph.styled"

interface ParagraphProps {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => (
  <StyledParagraph>{children}</StyledParagraph>
)

export default Paragraph
