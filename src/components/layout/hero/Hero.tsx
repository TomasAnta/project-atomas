import { TFunction } from "i18next"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"

import { Icon } from "@components/core/icon/Icon"
import Label from "@components/core/label/Label"

import {
  ContactMe,
  Download,
  DownloadBox,
  HeroContainer,
  HeroContentBox,
  ImageBox,
  LinkBox,
  Name,
  Position,
} from "./hero.styled"
import { Main } from "../page.styled"

const RESUME_PATH = "/resume.pdf"
const LINKEDIN_URL = "https://www.linkedin.com/in/antanaitis-tomas"
const GITHUB_URL = "https://github.com/TomasAnt"
const PROFILE_IMAGE_PATH = "/images/profile-image.png"
const PROFILE_IMAGE_DIMENSIONS = { width: 500, height: 500 }

const PHONE_NUMBER = "+370 698 21 381"

const HeroBox = ({ t }: { t: TFunction }) => (
  <HeroContentBox>
    <Label>👋 {t("hero.title")}</Label>
    <Name>Tomas Antanaitis</Name>
    <Position>{t("hero.subtitle")}</Position>
    <LinkBox>
      <a href={LINKEDIN_URL} target="_blank">
        <Icon iconName="linkedIn" rel="noreferrer" />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer">
        <Icon iconName="gitHub" />
      </a>
    </LinkBox>
  </HeroContentBox>
)

const ProfileImage = () => (
  <ImageBox>
    <Image
      priority
      src={PROFILE_IMAGE_PATH}
      alt="Illustration of the author"
      {...PROFILE_IMAGE_DIMENSIONS}
    />
  </ImageBox>
)

const DownloadAndContactBox = ({ t }: { t: TFunction }) => (
  <DownloadBox>
    <a href={RESUME_PATH} download>
      <Download>
        {t("hero.downloadResume")} <Icon iconName="arrowDown" />
      </Download>
    </a>
    <Link href={`tel:${PHONE_NUMBER}`}>
      <ContactMe>
        <Icon iconName="phone" /> {t("hero.letsTalk")}
      </ContactMe>
    </Link>
  </DownloadBox>
)

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Main>
      <HeroContainer>
        <HeroBox t={t} />
        <ProfileImage />
        <DownloadAndContactBox t={t} />
      </HeroContainer>
    </Main>
  )
}

export default Hero
