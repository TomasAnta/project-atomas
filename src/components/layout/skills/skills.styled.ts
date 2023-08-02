import styled from "styled-components"

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 9rem 0;
`
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 2.55rem 0 4rem 0;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    flex-wrap: wrap;
    justify-content: center;
  }
`
