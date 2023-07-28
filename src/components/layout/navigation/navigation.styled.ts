import styled from "styled-components"

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 102.5rem;
  height: 4rem;
  margin: 2.4rem 8.75rem 0 8.75rem;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.primary.secondaryBackground};
  border-radius: 1rem;
  padding: 12px 24px;
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.textHover};
    transition: all 0.2s ease-in-out;
  }
`

export const NavLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
