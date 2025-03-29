"use client"

import * as S from "./styles"
import Link from "next/link"

export function Hero() {
  return (
    <S.BackgroundContainer>
      <S.TagHero>
        <S.MainTitle>Olá, você está <br/>
        na Lacrei Saúde!</S.MainTitle>
        <S.MainDescription>Conectamos pessoas <span>LGBTQIAPN+</span> <br/>
        com profissionais de saúde qualificados, <br/>
        proporcionando experiências de cuidado <br/>
        seguras e inclusivas.</S.MainDescription>
        <S.HeroButtonContainer>
          <Link href="/patient">
            <S.HeroButton>Para pacientes</S.HeroButton>
          </Link>
          <Link href="/professional">
            <S.HeroButton>Para profissionais</S.HeroButton>
          </Link>
        </S.HeroButtonContainer>
      </S.TagHero>
    </S.BackgroundContainer>
  )
}