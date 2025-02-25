"use client"

import styled from "styled-components"
import { Button, ButtonLogin, Buttons } from "./buttons"
import Image from "next/image"
import ArrowDown from "./arrow-down.png"
import Link from "next/link"

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 112px;
  width: 100%;
  background: linear-gradient(to bottom, #F5FFFB, #FFFFFF);
`

export function Header() {
  return(
    <TagHeader>
      <Link href="/">
        <Image src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Lacrei logo" width={187} height={24}/>
      </Link>
      <Buttons>
        <Link href="/about_us">
          <Button>Quem somos</Button>
        </Link>
        <Link href="/help">
          <Button>Ajuda</Button>
        </Link>
        <ButtonLogin>Entrar
          <Image src={ArrowDown} alt="Seta para baixo" width={24} height={24}/>
        </ButtonLogin>
      </Buttons>
    </TagHeader>
  )
}