import React from "react"

import { StyledHeading } from "./heading.styled"

interface HeadingProps {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => (
  <StyledHeading>{children}</StyledHeading>
)

export default Heading
