import Image from "next/image"

import Label from "@components/core/label/Label"

import { Box, HomeContainer, Name, Position } from "./homePage.styled"

const HomePage = () => (
  <HomeContainer>
    <Box>
      <Label>👋 Nice to meet You!</Label>
      <Name>
        Tomas <br /> Antanaitis
      </Name>
      <Position>Font-End Developer</Position>
    </Box>
    <Box>
      <Image
        src="/images/profile-image.png"
        alt="Illustration of the author"
        width={500}
        height={500}
      />
    </Box>
    <Box></Box>
  </HomeContainer>
)

export default HomePage
