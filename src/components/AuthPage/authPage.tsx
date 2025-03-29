"use client"

import Image from "next/image";
import * as S from "./styles"
import Link from "next/link";

interface AuthPageProps {
  imageSrc: string;
}

export default function AuthPage({ imageSrc }: AuthPageProps) {
  return (
    <div>
      <S.Container>
        <S.Header>
          <S.HeaderDiv>
            <S.LogoDiv>
              <S.ImgDiv href="/">
                <S.ImgOne src="https://paciente.lacreisaude.com.br/_next/static/media/logo-ls.ccbc0d80.svg" alt="" />
                <S.ImgTwo src="https://paciente.lacreisaude.com.br/_next/static/media/logo-lacrei-saude.a3375403.svg" alt="" />
              </S.ImgDiv>
            </S.LogoDiv>
            <S.ButtonDiv href="/help">
              <S.HelpButton>Ajuda</S.HelpButton>
              <Link href="/help">
                <S.QuestionButton src="https://i.imgur.com/pz6iNik.png" alt="" width={24} height={24}/>
              </Link>
            </S.ButtonDiv>
          </S.HeaderDiv>
        </S.Header>
        <S.MainSection>
          <S.ContentContainer>
            <S.Presentation>
              <S.Title>Boas-vindas à Lacrei Saúde</S.Title>
              <S.Line />
              <S.Subtitle>Entre ou crie sua conta Lacrei Saúde.</S.Subtitle>
            </S.Presentation>
            <S.Form>
              <S.ContainerInput>
                <S.Label htmlFor="email">Email</S.Label>
                <S.InputContainer>
                  <S.Input id="email" placeholder="Digite seu e-mail" type="email" maxLength={-1} alt="email" />
                </S.InputContainer>
              </S.ContainerInput>
              <S.ContainerInput>
                <S.Label htmlFor="password">Senha</S.Label>
                <S.InputContainer>
                  <S.Input id="password" placeholder="Digite sua senha" type="password" maxLength={-1} alt="password" />
                </S.InputContainer>
              </S.ContainerInput>
              <S.Buttons>
                <S.DivButton>
                  <S.LoginButton type="button">Entrar</S.LoginButton>
                </S.DivButton>
                <S.DivButton>
                  <S.AccountButton type="button">Criar conta</S.AccountButton>
                </S.DivButton>
                <S.ForgetPassword href="/redefinicao_de_senha">Esqueci minha senha</S.ForgetPassword>
              </S.Buttons>
            </S.Form>
          </S.ContentContainer>
          <S.Image src={imageSrc} alt="" />
        </S.MainSection>
      </S.Container>
      <S.Footer>
        <S.FooterContainer>
          <S.LogoContainer>
            <Link href="/">
              <Image src="https://paciente.lacreisaude.com.br/_next/static/media/logo-lacrei-saude-2.fe01ece5.svg" alt="" height={48} width={166}/>
            </Link>
          </S.LogoContainer>
          <S.FooterLeft>
            <S.FooterLinks>
              <S.FooterLink href="https://lacreisaude.com.br/" target="_blank">Lacrei Saúde</S.FooterLink>
              <S.FooterLink href="https://profissional.lacreisaude.com.br/" target="_blank">Lacrei Pessoas Profissionais</S.FooterLink>
              <S.FooterLink href="https://lacreisaude.com.br/politica-de-privacidade/" target="_blank">Política de Privacidade</S.FooterLink>
              <S.FooterLink href="https://lacreisaude.com.br/termos-de-uso/" target="_blank">Termos de Uso</S.FooterLink>
            </S.FooterLinks>
            <S.FooterBottom>
              <S.LacreiInfos>
                <S.SocialDiv>
                  <S.SocialLinks>
                    <a href="https://www.facebook.com/lacrei.saude/" target="_blank">
                      <S.SocialImg src="https://paciente.lacreisaude.com.br/_next/static/media/facebook.c4e93695.svg" alt="" />
                    </a>
                    <a href="https://www.instagram.com/lacrei.saude/#" target="_blank">
                      <S.SocialImg src="https://paciente.lacreisaude.com.br/_next/static/media/instagram.6b226165.svg" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/lacrei-saude/posts/?feedView=all" target="_blank">
                      <S.SocialImg src="https://paciente.lacreisaude.com.br/_next/static/media/linkedin.a30519e7.svg" alt="" />
                    </a>
                    <a href="mailto:suporte@lacreisaude.com.br" target="_blank">
                      <S.SocialImg src="https://paciente.lacreisaude.com.br/_next/static/media/email-icon.6bcf7591.svg" alt="" />
                    </a>
                  </S.SocialLinks>
                </S.SocialDiv>
                <S.Span>CNPJ: 51.265.351/0001-65</S.Span>
              </S.LacreiInfos>
              <S.FooterButton>
                <Image src="https://paciente.lacreisaude.com.br/_next/static/media/arrow-up.b527dfae.svg" alt="" width={24} height={24}/>
              </S.FooterButton>
            </S.FooterBottom>
          </S.FooterLeft>
        </S.FooterContainer>
      </S.Footer>
    </div>
  );
}
