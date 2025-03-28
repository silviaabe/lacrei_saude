"use client"

import * as S from "./styles"
import Image from "next/image"

export function Know() {
  return (
    <S.TagKnow>
      <S.TitleWrapper>
        <S.Title>Conheça o jeito Lacrei Saúde de cuidar</S.Title>
        <S.Line />
        <S.Subtitle>Atendimento de qualidade e inclusivo</S.Subtitle>
      </S.TitleWrapper>
      <S.TagsWrapper>
        <S.TagWrapper>
          <section>
            <Image src="https://lacreisaude.com.br/_next/static/media/handshake-icon.422966a2.svg" alt="" width={78} height={66}/>
            <S.TagTitle>Inclusão</S.TagTitle>
          </section>
          <S.TagDescription>Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.</S.TagDescription>
        </S.TagWrapper>
        <S.TagWrapper>
          <section>
            <Image src="https://lacreisaude.com.br/_next/static/media/heart-icon.081c2229.svg" alt="" width={77} height={66}/>
            <S.TagTitle>Acolhimento</S.TagTitle>
          </section>
          <S.TagDescription>As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.</S.TagDescription>
        </S.TagWrapper>
        <S.TagWrapper>
          <section>
            <Image src="https://lacreisaude.com.br/_next/static/media/shield-icon.54d509f2.svg" alt="" width={56} height={66}/>
            <S.TagTitle>Segurança</S.TagTitle>
          </section>
          <S.TagDescription>Protegemos seus dados e validamos pacientes e profissionais da saúde.</S.TagDescription>
        </S.TagWrapper>
      </S.TagsWrapper>
    </S.TagKnow>
  )
}