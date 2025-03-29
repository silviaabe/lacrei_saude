"use client"

import styled from "styled-components"

export const TagAbout = styled.section`
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto auto 48px;

  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
    padding: 0px 1.5rem;
  }
`

export const Image = styled.img`
  color: transparent;
  height: 462px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    width: 40rem;
  }
`

export const TagWrapper = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  padding: 24px 30px;
  background-color: #fff;
  width: 474px;
  margin-left: -24px;
  z-index: 2;

  @media (max-width: 480px) {
    margin: 1rem 0px 0px 0rem;
  }

  @media screen and (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 1100px) {
    min-height: 22rem;
  }
`

export const AboutTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #1f1f1f;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`

export const Line = styled.div`
  margin-top: 12px;
  margin-left: 0px;
  width: 160px;
  height: 2px;
  background-color: #018762;
  border-radius: 4px;
  margin: 8px auto;

  @media (max-width: 768px) {
    margin: 0px 17rem 1rem 0px;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 43px;
  position: relative;

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`

export const Description = styled.p`
  color: #515151;
  line-height: 24px;
`

export const LinkButton = styled.a`
  text-decoration: none;
`

export const Button = styled.button`
  background-color: #fff;
  color: #018762;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px;
  width: 187px;
  border-radius: 8px;
  margin-top: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  height: 48px;
  line-height: 28px;
  border: 2px solid #018762;
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: 0ms.2s;

  &:hover {
    background-color: #018762;
    color: #fff;
    transition: ease 0.2s;
  }

  @media (max-width: 640px) {
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`