"use client"

import styled from "styled-components"

const BackgroundContainer = styled.div`
  width: 100%;
  height: 539px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0.00%, rgba(255, 255, 255, 0.2) 99%), url('https://files.oaiusercontent.com/file-Djw891vBFTySuYeFoc9kJE?se=2025-02-20T18%3A35%3A46Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D86b29094-6815-47cc-9888-7e9e0e1d9c9e.webp&sig=52QINRupO8IWiPMr3zZEXN9VhYEc3psLnSX94XRdBbM%3D');
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
          <HeroButton>Para pacientes</HeroButton>
          <HeroButton>Para profissionais</HeroButton>
        </HeroButtonContainer>
      </TagHero>
    </BackgroundContainer>
  )
}