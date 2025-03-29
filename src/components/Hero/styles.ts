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

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-top: 0px;
  }
` 

export const Box = styled.div`
  position: relative;

  @media (max-width: 480px) {
    background-color: rgb(255, 255, 255);
    padding: 1.5rem;
    border-radius: 12px;
    border: 2px solid rgb(238, 238, 238);
  }  
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

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const HeroButtonContainer = styled.div`
  display: inline-flex;
  gap: 24px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

export const ButtonLink = styled.a`
  text-decoration: none;
  width: 100%;
`

export const HeroButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  background-color: rgb(1, 135, 98);
  height: 3rem;
  border: 2px solid rgb(1, 135, 98);;
  border-radius: 8px;
  padding: 10px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 4px;
  transition: 0.2s;
  line-height: 27px;
  width: 13.25rem;

  &:hover {
    background-color: var(--bg-dark-hover);
    cursor: pointer;
    transition: 0.2s;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    width: 100%;
  }
`