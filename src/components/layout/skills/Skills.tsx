import React from "react"

import { useTranslation } from "next-i18next"

import Heading from "@components/core/heading/Heading"
import { Icon } from "@components/core/icon/Icon"
import Label from "@components/core/label/Label"
import Paragraph from "@components/core/paragraph/Paragraph"

import { Icons, SkillsContainer } from "./skills.styled"
import { Main } from "../page.styled"

const Skills = () => {
  const { t } = useTranslation()

  return (
    <Main>
      <SkillsContainer>
        <Label>👨‍💻 {t("skills.label")}</Label>
        <Heading>{t("skills.heading")}</Heading>
        <Paragraph>{t("skills.paragraphOne")}</Paragraph>
        <Icons>
          <Icon iconName="html" />
          <Icon iconName="css" />
          <Icon iconName="javaScript" />
          <Icon iconName="reactIcon" />
          <Icon iconName="nextIcon" />
          <Icon iconName="typeScript" />
          <Icon iconName="git" />
          <Icon iconName="figma" />
        </Icons>
      </SkillsContainer>
    </Main>
  )
}

export default Skills
