"use client"

import styled from "styled-components"

export const TagKnow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 56px;
  margin-top: 48px;
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
`

export const Line = styled.div`
  width: 160px;
  height: 2px;
  background-color: #018762;
  border-radius: 4px;
  margin: 8px auto;
`

export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #2d2d2d;
  margin-bottom: 24px;
  margin-top: 16px;
  background-color: #fff;
`

export const TagsWrapper = styled.div`
  max-width: 1116px;
  gap: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1 1 0%;
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
`

export const TagDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`