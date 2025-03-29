"use client"

import * as S from "./styles"
import Image from "next/image"
import ArrowDown from "./arrow-down.png"
import Link from "next/link"

export function Header() {
  return(
    <S.TagHeader>
      <Link href="/">
        <Image src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Lacrei logo" width={187} height={24}/>
      </Link>
      <S.Buttons>
        <Link href="/about_us">
          <S.Button>Quem somos</S.Button>
        </Link>
        <Link href="/help">
          <S.Button>Ajuda</S.Button>
        </Link>
        <S.ButtonLogin>Entrar
          <Image src={ArrowDown} alt="Seta para baixo" width={24} height={24}/>
        </S.ButtonLogin>
      </S.Buttons>
      <S.ButtonsIcon>
      <S.QuestionLink href="/help">
        <S.QuestionButton src="https://i.imgur.com/pz6iNik.png" alt="" width={24} height={24}/>
      </S.QuestionLink>
      <S.LoginButton src="https://i.imgur.com/fPddlo5.png" alt="" width={30} height={30}/>
      </S.ButtonsIcon>
    </S.TagHeader>
  )
}