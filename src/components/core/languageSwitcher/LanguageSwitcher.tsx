import { FC } from "react"

import { useRouter } from "next/router"

import { Icon } from "@components/core/icon/Icon"

import { Container } from "./languageSwitcher.styled"

const LanguageSwitcher: FC = () => {
  const router = useRouter()

  const handleLanguageChange = (lang: string) => {
    const currentPath = router.asPath
    router.push(currentPath, currentPath, { locale: lang })
  }

  return (
    <Container>
      <Icon iconName="ukFlag" onClick={() => handleLanguageChange("en")} />
      <Icon iconName="ltFlag" onClick={() => handleLanguageChange("lt")} />
    </Container>
  )
}

export default LanguageSwitcher
