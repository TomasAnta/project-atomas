import React from "react"

import { LabelContainer, LabelText } from "./label.styled"

interface LabelProps {
  children: React.ReactNode
}

const Label = ({ children }: LabelProps) => (
  <LabelContainer>
    <LabelText>{children}</LabelText>
  </LabelContainer>
)

export default Label
