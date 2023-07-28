import { ReactNode } from "react"

import Navigation from "./navigation/Navigation"
import { PageContainer } from "./page.styled"

// This component represents general page layout, that is valid for all website pages
export const Page = ({ children }: { children: ReactNode }) => (
  <>
    <PageContainer>
      <Navigation />
      {children}
    </PageContainer>
  </>
)
