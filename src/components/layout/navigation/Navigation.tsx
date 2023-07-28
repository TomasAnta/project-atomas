import Link from "next/link"

import { NavContainer, NavLinks, NavLogo } from "./navigation.styled"

const Navigation = () => (
  <NavContainer>
    <NavLogo>Logo</NavLogo>
    <NavLinks>
      <Link href="/">Home</Link>
      <Link href="/">Portfolio</Link>
      <Link href="/">CV</Link>
      <Link href="/">Skills</Link>
      <Link href="/">Contact</Link>
    </NavLinks>
  </NavContainer>
)

export default Navigation
