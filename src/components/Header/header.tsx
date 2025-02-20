"use client"

import styled from "styled-components"
import { Button, ButtonLogin, Buttons } from "./buttons"
import { LogoIcon } from "./logo-icon"

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
      <LogoIcon/>
      <Buttons>
        <Button>Quem somos</Button>
        <Button>Ajuda</Button>
        <ButtonLogin>Entrar</ButtonLogin>
      </Buttons>
    </TagHeader>
  )
}