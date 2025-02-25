"use client"

import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import Facebook from "./facebook.png"
import Instagram from "./instagram.png"
import LinkedIn from "./linkedin.png"
import Email from "./email.png"
import ArrowUp from "./arrow-up.png"

export const TagFooter = styled.footer`
  margin: 0 auto;
  max-width: 1196px;
`

export const Line = styled.div`
  margin: 0 auto 48px;
  height: 1px;
  max-width: 1196px;
  display: flex;
  background-color: #b0e0d3;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 48px;
`

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 200px;
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
`

export function Footer() {
  return (
    <TagFooter>
      <Line />
      <FooterWrapper>
        <ColumnOne>
          <Link href="https://lacreisaude.com.br/">
            <Image src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg" alt="Logotipo da Lacrei" width={170} height={48}/>
          </Link>
          <Nav>
            <Link href="https://www.facebook.com/lacrei.saude/">
              <Image src={Facebook} alt="Facebook da Lacrei" width={32} height={32}/>
            </Link>
            <Link href="https://www.instagram.com/lacrei.saude/#">
              <Image src={Instagram} alt="Instagram da Lacrei" width={32} height={32}/>
            </Link>
            <Link href="https://www.linkedin.com/company/lacrei-saude/posts/?feedView=all">
              <Image src={LinkedIn} alt="Linkedin da Lacrei" width={32} height={32}/>
            </Link>
            <Link href="mailto:contato@lacreisaude.com.br">
              <Image src={Email} alt="Email da Lacrei" width={32} height={32}/>
            </Link>
          </Nav>
        </ColumnOne>
        <ColumnTwo>
          <li>
            <Title>Lacrei Saúde</Title>
          </li>
          <li>
            <Subtitle href="">Quem somos</Subtitle>
          </li>
          <li>
            <Subtitle href="">Nosso propósito</Subtitle>
          </li>
          <li>
            <Subtitle href="">Missão, Visão e Valor</Subtitle>
          </li>
          <li>
            <Subtitle href="">Acessibilidade</Subtitle>
          </li>
        </ColumnTwo>
        <ColumnTwo>
          <li>
            <Title>Saúde</Title>
          </li>
          <li>
            <Subtitle href="/search">Buscar atendimento</Subtitle>
          </li>
          <li>
            <Subtitle href="/offer">Oferecer atendimento</Subtitle>
          </li>
        </ColumnTwo>
        <ColumnTwo>
          <li>
            <Title>Segurança e Privacidade</Title>
          </li>
          <li>
            <Subtitle href="#">Política de Privacidade</Subtitle>
          </li>
          <li>
            <Subtitle href="#">Termos de Uso</Subtitle>
          </li>
          <li>
            <Subtitle href="#">Direitos de Titular</Subtitle>
          </li>
        </ColumnTwo>
      </FooterWrapper>
      <Line />
      <FooterWrapper2>
        <TextWrapper>
          <p>A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
          <p>Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site
            <a href="#"></a>
          </p>
          <Text>Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</Text>
        </TextWrapper>
        <Button>
          <Image src={ArrowUp} alt="Seta para cima" width={24} height={24}/>
        </Button>
      </FooterWrapper2>
    </TagFooter>
  )
}