"use client"

import * as S from "./styles"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <S.TagFooter>
      <S.Line />
      <S.FooterWrapper>
        <S.ColumnOne>
          <Link href="https://lacreisaude.com.br/">
            <Image src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg" alt="Logotipo da Lacrei" width={170} height={48} />
          </Link>
          <S.Nav>
            <Link href="https://www.facebook.com/lacrei.saude/" target="_blank">
              <Image src="https://paciente.lacreisaude.com.br/_next/static/media/facebook.c4e93695.svg" alt="Facebook da Lacrei" width={32} height={32}/>
            </Link>
            <Link href="https://www.instagram.com/lacrei.saude/#" target="_blank">
              <Image src="https://paciente.lacreisaude.com.br/_next/static/media/instagram.6b226165.svg" alt="Instagram da Lacrei" width={32} height={32}/>
            </Link>
            <Link href="https://www.linkedin.com/company/lacrei-saude/posts/?feedView=all" target="_blank">
              <Image src="https://paciente.lacreisaude.com.br/_next/static/media/linkedin.a30519e7.svg" alt="Linkedin da Lacrei" width={32} height={32}/>
            </Link>
            <Link href="mailto:contato@lacreisaude.com.br" target="_blank">
              <Image src="https://paciente.lacreisaude.com.br/_next/static/media/email-icon.6bcf7591.svg" alt="Email da Lacrei" width={32} height={32}/>
            </Link>
          </S.Nav>
        </S.ColumnOne>
        <S.ColumnTwo>
          <li>
            <S.Title>Lacrei Saúde</S.Title>
          </li>
          <li>
            <S.Subtitle href="">Quem somos</S.Subtitle>
          </li>
          <li>
            <S.Subtitle href="">Nosso propósito</S.Subtitle>
          </li>
          <li>
            <S.Subtitle href="">Missão, Visão e Valor</S.Subtitle>
          </li>
          <li>
            <S.Subtitle href="">Acessibilidade</S.Subtitle>
          </li>
        </S.ColumnTwo>
        <S.ColumnTwo>
          <li>
            <S.Title>Saúde</S.Title>
          </li>
          <li>
            <S.Subtitle href="/search">Buscar atendimento</S.Subtitle>
          </li>
          <li>
            <S.Subtitle href="/offer">Oferecer atendimento</S.Subtitle>
          </li>
        </S.ColumnTwo>
        <S.ColumnTwo>
          <li>
            <S.Title>Segurança e Privacidade</S.Title>
          </li>
          <li>
            <S.Subtitle href="#">Política de Privacidade</S.Subtitle>
          </li>
          <li>
            <S.Subtitle href="#">Termos de Uso</S.Subtitle>
          </li>
          <li>
            <S.Subtitle href="#">Direitos de Titular</S.Subtitle>
          </li>
        </S.ColumnTwo>
      </S.FooterWrapper>
      <S.Line />
      <S.FooterWrapper2>
        <S.TextWrapper>
          <p>A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
          <p>Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site
            <a href="#"></a>
          </p>
          <S.Text>Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</S.Text>
        </S.TextWrapper>
        <S.Button>
          <Image src="https://paciente.lacreisaude.com.br/_next/static/media/arrow-up.b527dfae.svg" alt="Seta para cima" width={24} height={24}/>
        </S.Button>
      </S.FooterWrapper2>
    </S.TagFooter>
  )
}