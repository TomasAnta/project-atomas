import React from "react"

import Heading from "@components/core/heading/Heading"
import Label from "@components/core/label/Label"

import { SkillsContainer } from "./skills.styled"
import { Main } from "../page.styled"

const Skills = () => (
  <Main>
    <SkillsContainer>
      <Label>👨‍💻 Skills · Experiences</Label>
      <Heading>Technologies and skills</Heading>
    </SkillsContainer>
  </Main>
)

export default Skills
