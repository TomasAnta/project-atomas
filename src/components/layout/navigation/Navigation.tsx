import { Icon } from "@components/core/icon/Icon"
import LanguageSwitcher from "@components/core/languageSwitcher/LanguageSwitcher"

import { NavContainer, NavLinks, NavLogo } from "./navigation.styled"

const Navigation = () => (
  <NavContainer>
    <NavLogo>
      <Icon iconName="logo" />
    </NavLogo>
    <NavLinks>
      <LanguageSwitcher />
      {/* Todo: Add anchor points when page is done */}
      {/* <Link href="/">{t("navigation.homePage")}</Link>
        <Link href="#portfolio">{t("navigation.portfolio")}</Link>
        <Link href="#cv">{t("navigation.resume")}</Link>
        <Link href="#about-me">{t("navigation.aboutMe")}</Link>
        <Link href="#skills">{t("navigation.skills")}</Link>
        <Link href="#contact">{t("navigation.contact")}</Link> */}
    </NavLinks>
  </NavContainer>
)

export default Navigation
