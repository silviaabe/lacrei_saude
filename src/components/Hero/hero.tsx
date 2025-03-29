"use client"

import * as S from "./styles"

export function Hero() {
  return (
    <S.BackgroundContainer>
      <S.TagHero>
        <S.MainTitle>Olá, você está <br/>
        na Lacrei Saúde!</S.MainTitle>
        <S.Box>
          <S.MainDescription>Conectamos pessoas <span>LGBTQIAPN+</span> <br/>
          com profissionais de saúde qualificados, <br/>
          proporcionando experiências de cuidado <br/>
          seguras e inclusivas.</S.MainDescription>
          <S.HeroButtonContainer>
            <S.ButtonLink href="/patient">
              <S.HeroButton>Para pacientes</S.HeroButton>
            </S.ButtonLink>
            <S.ButtonLink href="/professional">
              <S.HeroButton>Para profissionais</S.HeroButton>
            </S.ButtonLink>
          </S.HeroButtonContainer>
        </S.Box>
      </S.TagHero>
    </S.BackgroundContainer>
  )
}