import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Hero from "@components/layout/hero/Hero"
import { Page } from "@components/layout/Page"
import Skills from "@components/layout/skills/Skills"
import { Locales } from "@typings/globalTypes"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Front-End Developer | Atomas</title>
      <meta name="description" content="Boilerplate" />
    </Head>
    <Page>
      <Hero />
      <Skills />
    </Page>
  </>
)

export default Home

export async function getStaticProps({ locale }: { locale: Locales }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
