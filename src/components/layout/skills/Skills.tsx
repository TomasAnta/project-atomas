import React from "react"

import { Tooltip } from "@mui/material"
import { useTranslation } from "next-i18next"

import Heading from "@components/core/heading/Heading"
import { Icon, IconName } from "@components/core/icon/Icon"
import Label from "@components/core/label/Label"
import Paragraph from "@components/core/paragraph/Paragraph"

import { Icons, SkillsContainer } from "./skills.styled"
import { Main } from "../page.styled"

const Skills = () => {
  const { t } = useTranslation()

  const iconNames: IconName[] = [
    "html",
    "css",
    "javaScript",
    "react",
    "next",
    "typeScript",
    "git",
    "figma",
  ]

  return (
    <Main>
      <SkillsContainer>
        <Label>👨‍💻 {t("skills.label")}</Label>
        <Heading>{t("skills.heading")}</Heading>
        <Paragraph>{t("skills.paragraphOne")}</Paragraph>
        <Icons>
          {iconNames.map((iconName, index) => (
            <Tooltip key={iconName} title={iconName}>
              <Icon key={index} iconName={iconName} />
            </Tooltip>
          ))}
        </Icons>
      </SkillsContainer>
    </Main>
  )
}

export default Skills
