"use client"

import * as S from "./styles"

export function About() {
  return (
    <S.TagAbout>
      <S.Image src="https://lacreisaude.com.br/_next/static/media/people-holding-flag.8d096827.png" alt="" />
      <S.TagWrapper>
        <div>
          <S.AboutTitle>O que é a <br/> Lacrei Saúde?</S.AboutTitle>
          <S.Line />
        </div>
        <S.DescriptionWrapper>
          <S.Description>
            O nosso papel é construir a conexão entre as pessoas da comunidade <strong>LGBTQIAPN+</strong> que precisam de atendimento clínico com profissionais da saúde.
          </S.Description>
          <S.Description>
          Tudo isso com segurança, inclusão e representatividade.
          </S.Description>
          <S.Description>
          Surgimos da esperança de ter um atendimento clínico qualificado, seguro e empático para todas as pessoas.
          </S.Description>                                     
        </S.DescriptionWrapper>
        <S.LinkButton href="/about_us">
          <S.Button>Conhecer</S.Button>
        </S.LinkButton>
      </S.TagWrapper>
    </S.TagAbout>
  )
}