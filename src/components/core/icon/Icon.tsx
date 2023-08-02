import React, { forwardRef } from "react"

import ArrowDown from "@assets/icons/arrowDown.svg"
import Css from "@assets/icons/css.svg"
import Figma from "@assets/icons/figma.svg"
import Git from "@assets/icons/git.svg"
import GitHub from "@assets/icons/gitHub.svg"
import Html from "@assets/icons/html.svg"
import JavaScript from "@assets/icons/javaScript.svg"
import LinkedIn from "@assets/icons/linkedIn.svg"
import Logo from "@assets/icons/logo.svg"
import LtFlag from "@assets/icons/ltFlag.svg"
import Next from "@assets/icons/nextIcon.svg"
import Phone from "@assets/icons/phone.svg"
import ReactIcon from "@assets/icons/reactIcon.svg"
import TypeScript from "@assets/icons/typeScript.svg"
import UkFlag from "@assets/icons/ukFlag.svg"

import { StyledIcon } from "./icon.styled"

const icons = {
  logo: Logo,
  arrowDown: ArrowDown,
  phone: Phone,
  linkedIn: LinkedIn,
  gitHub: GitHub,
  git: Git,
  html: Html,
  css: Css,
  javaScript: JavaScript,
  react: ReactIcon,
  next: Next,
  figma: Figma,
  typeScript: TypeScript,
  ltFlag: LtFlag,
  ukFlag: UkFlag,
}

export type IconName = keyof typeof icons

interface IconProps extends React.ComponentProps<typeof StyledIcon> {
  iconName: IconName
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ iconName, ...props }, ref) => (
    <StyledIcon ref={ref} {...props}>
      {React.createElement(icons[iconName])}
    </StyledIcon>
  )
)

Icon.displayName = "Icon"
