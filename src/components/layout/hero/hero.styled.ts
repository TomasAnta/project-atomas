import styled from "styled-components"

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    flex-wrap: wrap;
    justify-items: center;
  }
`

export const ImageBox = styled.div`
  flex: 1;

  img {
    object-fit: contain;
    max-width: 100%;
    height: auto;
  }

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    flex: initial;
  }
`

export const DownloadBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    order: 3;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    flex: initial;
  }
`

export const HeroContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    order: 2;
    width: 100%;
    align-items: center;
    text-align: center;
    flex: initial;
  }
`

export const Name = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.primary.textPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  margin: 1.75rem 0;
  line-height: normal;
`

export const Download = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary.textHover};
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  gap: 0.5rem;
  cursor: pointer;
`

export const ContactMe = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  max-width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.primary.textHover};
  color: ${({ theme }) => theme.colors.primary.textHover};
  padding: 0.6rem 1.25rem;
  margin-left: auto;
  gap: 0.5rem;
  cursor: pointer;
`

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  gap: 1rem;
  cursor: pointer;
`

export const Position = styled.p`
  color: ${({ theme }) => theme.colors.primary.textSecondary};
  margin: 0;
`
