"use client"

import * as S from "./styles"

export default function AboutPage() {
  return (
    <>
      <S.Container>
        <S.SectionOne>
          <S.LeftSide>
            <div>
              <S.SectionOneTitle>Atendimento qualificado, seguro e inclusivo</S.SectionOneTitle>
              <S.LineOne />
            </div>
            <S.SectionOneDescription>Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.</S.SectionOneDescription>
            <S.SectionOneDescription>Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+.</S.SectionOneDescription>
            <S.SectionOneDescription>Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.</S.SectionOneDescription>
          </S.LeftSide>
          <S.SectionOneImage src="https://lacreisaude.com.br/_next/static/media/about-us-image.0c5e5cc6.png" alt="" />
        </S.SectionOne>
        <S.SectionTwo>
          <S.SectionTwoTitle>Missão, Visão e Valores da Lacrei Saúde</S.SectionTwoTitle>
          <S.LineTwo></S.LineTwo>
          <S.SectionTwoDescription>O que nos motiva</S.SectionTwoDescription>
          <S.CenterSide>
            <S.SectionTwoImage src="https://lacreisaude.com.br/_next/static/media/mission-vision-values-image.2d259229.png" alt="" />
            <S.RightSide>
              <S.Box>
                <div>
                  <S.Icon src="https://lacreisaude.com.br/_next/static/media/mission-icon.9ebf0d57.svg" alt="" />
                </div>
                <S.InsideBox>
                  <S.BoxTitle>Missão</S.BoxTitle>
                  <S.BoxDescription>Proporcionar a inclusão da comunidade ao atendimento clínico</S.BoxDescription>
                </S.InsideBox>
              </S.Box>
              <S.Box>
                <div>
                  <S.Icon src="https://lacreisaude.com.br/_next/static/media/vision-icon.0673d1e8.svg" alt="" />
                </div>
                <S.InsideBox>
                  <S.BoxTitle>Visão</S.BoxTitle>
                  <S.BoxDescription>Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+ no Brasil.</S.BoxDescription>
                </S.InsideBox>
              </S.Box>
              <S.Box>
                <div>
                  <S.Icon src="https://lacreisaude.com.br/_next/static/media/values-icon.590c03fe.svg" alt="" />
                </div>
                <S.InsideBox>
                  <S.BoxTitle>Valores</S.BoxTitle>
                  <S.BoxDescription>Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+.</S.BoxDescription>
                </S.InsideBox>
              </S.Box>
            </S.RightSide>
          </S.CenterSide>
        </S.SectionTwo>
        <S.SectionThree>
          <S.LeftSideTwo>
            <S.SectionThreeTitle>Nosso propósito</S.SectionThreeTitle>
            <S.LineOne></S.LineOne>
            <S.SectionThreeDescription>A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico a profissionais da saúde.</S.SectionThreeDescription>
            <S.SectionThreeDescription>Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.</S.SectionThreeDescription>
          </S.LeftSideTwo>
          <S.SectionThreeImage src="https://lacreisaude.com.br/_next/static/media/purpose-image.3e0752bb.png" alt="" />
        </S.SectionThree>
      </S.Container>
    </>
  )
}