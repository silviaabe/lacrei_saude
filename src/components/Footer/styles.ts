"use client"

import styled from "styled-components"

export const TagFooter = styled.footer`
  margin: 0 auto;
  max-width: 1196px;

  @media (max-width: 768px) {
    margin: 0px 1.5rem;
  }
`

export const Line = styled.div`
  margin: 0 auto 48px;
  height: 1px;
  max-width: 1196px;
  display: flex;
  background-color: #b0e0d3;

  @media (max-width: 960px) {
    display: block;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 48px;
  margin: auto 20px;

  @media (max-width: 480px) {
    gap: 2rem;
  }

  @media (max-width: 640px) {
    padding-bottom: 3.3rem;
    gap: 3rem;
  }

  @media (max-width: 960px) {
    justify-content: flex-start;
    padding-bottom: 5rem;
    gap: 4.5rem;
  }
`

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media screen and (max-width: 960px) {
    position: absolute;
    bottom: -0.2rem;
    align-items: center;
    gap: 0px;
  }
`

export const LogoImg = styled.img`
  @media (max-width: 960px) {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 200px;

  @media screen and (max-width: 960px) {
    width: 10.5rem;
  }
`

export const Icon = styled.img`
  @media screen and (max-width: 960px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const ColumnTwo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 8px;

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const LineTwo = styled.div`
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const Subtitle = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #1f1f1f;
`

export const FooterWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 24px;

  @media screen and (max-width: 960px) {
    align-items: flex-end;
    flex-direction: column;
    margin-top: 24px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 12px;
  color: #515151;
  font-weight: 400;
  line-height: 18px;
  margin: auto 20px;
`

export const Text = styled.p`
  margin-top: 16px;
`

export const Button = styled.button`
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;
  color: #018762;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  cursor: pointer;
  outline: 0px;
  border: 2px solid #018762;
  border-radius: 8px;
  transition: 0.2s;

  @media screen and (max-width: 960px) {
    margin-bottom: 1.5rem;
  }
`