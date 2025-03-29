"use client"

import styled from "styled-components"

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 112px;
  width: 100%;
  background: linear-gradient(to bottom, #F5FFFB, #FFFFFF);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 850px) {
    /* padding: 1.5rem 4rem; */
  }

  @media (max-width: 1100px) {
    /* padding: 1.5rem 7rem; */
  }
`

export const Buttons = styled.div`
  display: flex;
  height: 48px;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Button = styled.button`
  font-family: "Manrope", sans-serif;
  height: 100%;
  border-radius: 8px;
  padding: 10px 32px;
  gap: 24px;
  border: none;
  background-color: var(--background);
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  color: var(--main-color);

  &:hover {
    background-color: var(--bg-light-hover);
    cursor: pointer;
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonLogin = styled.button`
  font-size: 18px;
  font-weight: 700;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  background-color: #018762;
  height: 48px;
  line-height: 28px;
  border: 2px solid #018762;
  border-radius: 8px;
  color: #fff;
  letter-spacing: 0.32px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--bg-dark-hover);
  }
`

export const ButtonsIcon = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 769px) {
  display: none;
}
`

export const QuestionLink = styled.a`
  width: 24px;
  height: 24px;
  margin-right: 1.5rem;
`

export const QuestionButton = styled.img`
  @media (max-width: 640px) {
    /* width: 100%; */
    /* margin-right: 1.5rem; */
  }
`

export const LoginButton = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 640px) {
    /* width: 100%; */
  }
`