/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unused-modules */
import React, { forwardRef } from "react"

import Logo from "@assets/icons/logo.svg"

import { StyledIcon } from "./icon.styled"

const icons = {
  logo: Logo,
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
