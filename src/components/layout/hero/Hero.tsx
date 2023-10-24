import { TFunction } from "i18next"
import Image from "next/image"
import { useTranslation } from "next-i18next"

import { Icon } from "@components/core/icon/Icon"
import Label from "@components/core/label/Label"

import {
  ContactButton,
  DownloadContainer,
  DownloadResume,
  FullName,
  HeroContentContainer,
  HeroWrapper,
  JobTitle,
  ProfileImageContainer,
  SocialLinksContainer,
} from "./hero.styled"
import { Main } from "../page.styled"

const RESUME_PATH = "/tomas-antanaitis.pdf"
const LINKEDIN_URL = "https://www.linkedin.com/in/antanaitis-tomas"
const GITHUB_URL = "https://github.com/TomasAnt"
const PROFILE_IMAGE_PATH = "/images/profile-image.png"
const PROFILE_IMAGE_DIMENSIONS = { width: 500, height: 500 }
const PHONE_NUMBER = "+370 698 21 381"

const HeroContent = ({ t }: { t: TFunction }) => (
  <HeroContentContainer>
    <Label>👋 {t("hero.title")}</Label>
    <FullName>
      Tomas <br /> Antanaitis
    </FullName>
    <JobTitle>{t("hero.subtitle")}</JobTitle>
    <SocialLinksContainer>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        <Icon iconName="linkedIn" />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        <Icon iconName="gitHub" />
      </a>
    </SocialLinksContainer>
  </HeroContentContainer>
)

const ProfileImage = () => (
  <ProfileImageContainer>
    <Image
      priority
      src={PROFILE_IMAGE_PATH}
      alt="Illustration of the author"
      {...PROFILE_IMAGE_DIMENSIONS}
    />
  </ProfileImageContainer>
)

const DownloadAndContactContainer = ({ t }: { t: TFunction }) => (
  <DownloadContainer>
    <DownloadResume href={RESUME_PATH} download>
      {t("hero.downloadResume")} <Icon iconName="arrowDown" />
    </DownloadResume>
    <ContactButton href={`tel:${PHONE_NUMBER}`}>
      <Icon iconName="phone" /> {t("hero.letsTalk")}
    </ContactButton>
  </DownloadContainer>
)

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Main>
      <HeroWrapper>
        <HeroContent t={t} />
        <ProfileImage />
        <DownloadAndContactContainer t={t} />
      </HeroWrapper>
    </Main>
  )
}

export default Hero
