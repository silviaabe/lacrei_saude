"use client"

import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: calc(-148px + 100vh);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0px 8.625rem;
  background: linear-gradient(rgb(245, 255, 251) 1.9225rem, rgb(255, 255, 255) calc(15vh)) no-repeat;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`

export const HeaderDiv = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0px;
`

export const LogoDiv = styled.div`
  max-width: 202px;
  max-height: 24px;
  display: flex;
  justify-content: left;
  min-height: 48px;
`

export const ImgDiv = styled.a`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: rgb(1, 135, 98);
  text-decoration: none;
  gap: 0.659rem;
  cursor: pointer;
  transition: 0.2s;
`

export const ImgOne = styled.img`
  width: 34px;
  height: 25px;
`

export const ImgTwo = styled.img`
  width: 161px;
  height: 20px;
`

export const ButtonDiv = styled.a`
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: space-around;
  width: fit-content;
  position: relative;
  text-decoration: none;
`

export const HelpButton = styled.button`
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(1, 135, 98);
  color: rgb(1, 135, 98);
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  display: flex;
  font-size: 1.125rem;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.625rem 2rem;
  filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 10px);
  transition: 0.2s;
  max-height: 3rem;
  min-width: 100%;

  &:hover {
    background-color: var(--bg-light-hover);
  }
`

export const MainSection = styled.section`
  display: flex;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 52%;
  padding: 3rem 0px 5.25rem;
`

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0rem;
  line-height: 1.2rem;
  color: rgb(31, 31, 31);
`

export const Line = styled.div`
  content: "";
  display: block;
  margin-top: 0px;
  height: 2px;
  max-width: 10rem;
  background-color: rgb(1, 135, 98);
`

export const Subtitle = styled.p`
  display: initial;
  align-items: initial;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0rem;
  line-height: 1.5rem;
  color: rgb(31, 31, 31);
`

export const Form = styled.form`
  padding-top: 2rem;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0rem;
  line-height: 1.5rem;
  padding-bottom: 8px;
  color: rgb(45, 45, 45);
`

export const InputContainer = styled.div`
  height: 48px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(81, 81, 81);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: rgb(45, 45, 45);
  padding: 0px 8px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0rem;
  line-height: 1.5rem;
  width: 100%;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 1rem;
`

export const DivButton = styled.div`
  width: 100%;
  position: relative;
`

export const LoginButton = styled.button`
  height: 100%;
  background-color: rgb(1, 135, 98);
  border: 2px solid transparent;
  color: rgb(255, 255, 255);
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  display: flex;
  font-size: 1.125rem;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.625rem 0px;
  filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 10px);
  transition: 0.2s;
  max-height: 3rem;
  min-width: 100%;

  &:hover {
    background-color: var(--bg-dark-hover);
  }
`

export const AccountButton = styled.button`
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: 2px solid transparent;
  color: rgb(1, 135, 98);
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  display: flex;
  font-size: 1.125rem;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.625rem 0px;
  filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 10px);
  transition: 0.2s;
  max-height: 3rem;
  min-width: 100%;

  &:hover {
    background-color: var(--bg-light-hover);
  }
`

export const ForgetPassword = styled.a`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0rem;
  line-height: 1.5rem;
  color: rgb(1, 135, 98);
  text-decoration: underline;
`

export const Image = styled.img`
  height: auto;
  width: 48%;
  margin: 5.25rem 0px 9.125rem;
`

export const Footer = styled.footer`
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 0px 8.625rem 50px;
  display: flex;
  justify-content: center;
`

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 2rem 0px 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(176, 224, 211);
`

export const FooterLeft = styled.div`
  margin-left: 5rem;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`

export const FooterLink = styled.a`
  color: rgb(31, 31, 31);
  font-weight: 400;
  transition: 0.2s;
  text-decoration: none;
`

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LacreiInfos = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  max-width: 39.5rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  color: 1f1f1f;
`

export const SocialImg = styled.img`
  transition: 0.2s;
  cursor: pointer;
`

export const Span = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: #515151;
`

export const FooterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  outline: 0px;
  background-color: transparent;
  border: 2px solid rgb(1, 135, 98);
  border-radius: 8px;
  color: rgb(1, 135, 98);
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px;
`