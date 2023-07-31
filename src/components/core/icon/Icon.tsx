/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unused-modules */
import React, { forwardRef } from "react"

import ArrowDown from "@assets/icons/arrowDown.svg"
import GitHub from "@assets/icons/gitHub.svg"
import LinkedIn from "@assets/icons/linkedIn.svg"
import Logo from "@assets/icons/logo.svg"
import Phone from "@assets/icons/phone.svg"

import { StyledIcon } from "./icon.styled"

const icons = {
  logo: Logo,
  arrowDown: ArrowDown,
  phone: Phone,
  linkedIn: LinkedIn,
  gitHub: GitHub,
}

export type IconName = keyof typeof icons

interface IconProps extends React.ComponentProps<typeof StyledIcon> {
  iconName: IconName
}

export const Icon = forwardRef(({ iconName, ...props }: IconProps, ref) => (
  <StyledIcon ref={ref} {...props}>
    {React.createElement(icons[iconName])}
  </StyledIcon>
))

Icon.displayName = "Icon"
