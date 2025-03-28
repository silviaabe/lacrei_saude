"use client"

import Link from "next/link"
import styled from "styled-components"

const BackgroundContainer = styled.div`
  width: 100%;
  height: 539px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.1) 0%), url('https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png');
  background-size: cover; 
  background-position: 20% 30%; 
`

const TagHero = styled.div`
  width: 775px;
  height: 100vh;
  padding: 48px 0 0 162px;
`

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  margin: 48px 0 16px;
  color: var(--main-color);
` 

const MainDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
  color: var(--description);
  margin: 0 0 32px;

  span {
    font-weight: 700;
  }
`

const HeroButtonContainer = styled.div`
  display: inline-flex;
  gap: 24px;
`

const HeroButton = styled.button`
  height: 48px;
  width: 212px;
  border-radius: 8px;
  padding: 2px;
  border: 2px solid transparent;
  background-color: var(--main-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.32px;
  color: var(--background);
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 4px;

  &:hover {
    background-color: var(--bg-dark-hover);
    cursor: pointer;
    transition: 0.2s;
  }
`

export function Hero() {
  return (
    <BackgroundContainer>
      <TagHero>
        <MainTitle>Olá, você está <br/>
        na Lacrei Saúde!</MainTitle>
        <MainDescription>Conectamos pessoas <span>LGBTQIAPN+</span> <br/>
        com profissionais de saúde qualificados, <br/>
        proporcionando experiências de cuidado <br/>
        seguras e inclusivas.</MainDescription>
        <HeroButtonContainer>
          <Link href="/patient">
            <HeroButton>Para pacientes</HeroButton>
          </Link>
          <Link href="/professional">
            <HeroButton>Para profissionais</HeroButton>
          </Link>
        </HeroButtonContainer>
      </TagHero>
    </BackgroundContainer>
  )
}