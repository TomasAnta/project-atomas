import Link from "next/link"
import { useTranslation } from "next-i18next"

import { Icon } from "@components/core/icon/Icon"

import { NavContainer, NavLinks, NavLogo } from "./navigation.styled"

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <NavContainer>
      <NavLogo>
        <Icon iconName="logo" />
      </NavLogo>
      <NavLinks>
        <Link href="/">{t("navigation.homePage")}</Link>
        <Link href="#portfolio">{t("navigation.portfolio")}</Link>
        <Link href="#cv">{t("navigation.resume")}</Link>
        <Link href="#about-me">{t("navigation.aboutMe")}</Link>
        <Link href="#skills">{t("navigation.skills")}</Link>
        <Link href="#contact">{t("navigation.contact")}</Link>
      </NavLinks>
    </NavContainer>
  )
}

export default Navigation
