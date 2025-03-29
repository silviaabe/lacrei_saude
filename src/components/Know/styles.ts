"use client"

import styled from "styled-components"

export const TagKnow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 56px;
  margin-top: 48px;

  @media (max-width: 480px) {
    align-items: start;
    margin-bottom: 1.5rem;
    margin-top: 10.5rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 24px;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: left;
    width: 16rem;
    margin: 0px;
  }
`

export const Line = styled.div`
  width: 160px;
  height: 2px;
  background-color: #018762;
  border-radius: 4px;
  margin: 8px auto;

  @media (max-width: 480px) {
    margin: 8px 0px;
  }
`

export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #2d2d2d;
  margin-bottom: 24px;
  margin-top: 16px;
  background-color: #fff;

  @media (max-width: 640px) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 1rem 0px 1.5rem;
  }
`

export const TagsWrapper = styled.div`
  max-width: 1116px;
  gap: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1 1 0%;

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0px 1.5rem;
  }
`

export const TagWrapper = styled.div`
  height: 288px;
  gap: 16px;
  border-radius: 8px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0%;
  text-align: center;
  background-color: #f9f3ff;
  position: relative;

  @media (max-width: 480px) {
    padding: 1rem 1rem 1.5rem;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    text-align: start;
    align-items: flex-start;
  }
`

export const Section = styled.section`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const Img = styled.img`
  @media (max-width: 768px) {
    width: 1.75rem;
    height: 1.625rem;
  }
`

export const TagTitle = styled.h4`
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: 38px;
  margin-top: 8px;
  background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%);
  background-clip: text; /* Padrão */
  -webkit-background-clip: text; /* Compatibilidade com Safari/Chrome */
  -webkit-text-fill-color: transparent; /* Necessário para aplicar o gradiente */
  color: transparent; /* Compatibilidade extra */

  @media (max-width: 768px) {
    margin: 0px 10px;
    font-weight: 700;
    font-size: 1.125rem;
  }
`

export const TagDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`