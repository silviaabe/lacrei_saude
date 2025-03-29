"use client"

import { styled } from "styled-components"

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 33.6875rem;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.1) 0%), url('https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png');
  background-size: cover; 
  background-position: 20% 30%; 
`

export const TagHero = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 10.125rem 0rem;

  @media (max-width: 768px) {
    padding: 5.5rem 1.5rem 0px;
  }
`

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.625rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: var(--main-color);
` 

export const MainDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: var(--description);
  margin-bottom: 2rem;

  span {
    font-weight: 700;
  }
`

export const HeroButtonContainer = styled.div`
  display: inline-flex;
  gap: 24px;
`

export const HeroButton = styled.button`
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