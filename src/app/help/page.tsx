"use client"

import styled from "styled-components"
import ArrowRight from "./arrow-right.png"
import ArrowUp from "./arrow-up.png"
import ArrowDown from "./arrow-down.png"
import Image from "next/image"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  padding: 0px 7.625rem 4rem;
  margin: 0px auto;
  gap: 2rem;
  background: linear-gradient(#fff 0%, #f5fffb 100%);;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Nav = styled.div`
  margin: 3rem 0px;
  width: 100%;
  max-width: 1100px;
`

export const NavLink = styled.div`
  display: flex;
  gap: 0.75rem;
  color: #515151;
  overflow: hidden;
`

export const LinkOne = styled.span`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  white-space: nowrap;

  gap: 0.75rem;
`

export const Link1 = styled.a`
  text-decoration: none;
  color: #515151;
  border: 2px solid transparent;
`

export const LinkTwo = styled.span`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;

  gap: 0.75rem;
  color: #018762;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Title = styled.h1`
  color: #018762;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  margin: 0.67rem 0px 0px;
`

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #515151;
  line-height: 2.25rem;
  width: 57.8rem;
  margin-bottom: 1rem;
`

export const Faq = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 90rem;
  flex: 1 1 0%;
`

export const Question = styled.div`
  border: 1px solid #515151;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  p {
    color: #2d2d2d;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 28.2rem;
  padding-top: 2rem;
`

export const BottomTitle = styled.h2`
  color: #018762;
  font-size: 1.5rem;
  line-height: 2.25rem;
`

export const BottomButton = styled.button`
  width: 16.3rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  background-color: #018762;
  height: 3rem;
  line-height: 1.75rem;
  border: 2px solid #018762;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #007756;
  }
`

export const Answer = styled.div`
  border: 2px solid #295146;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: rgb(154, 196, 184) 2px 3px 3px;
`

export default function Help() {
  return (
    <MainContainer>
      <Section>
        <div>
          <Nav>
            <NavLink>
              <LinkOne>
                <Link1 href="/">Início</Link1>
                <Image src={ArrowRight} alt="" width={9} height={14}/>
              </LinkOne>
              <LinkTwo>Dúvidas Frequentes</LinkTwo>
            </NavLink>
          </Nav>
          <Title>Dúvidas Frequentes</Title>
        </div>
        <Subtitle>Aqui, você encontra as dúvidas mais frequentes!</Subtitle>
        <Faq>
          <QuestionBox>
            <Question>
              <p>Como faço para me cadastrar na Lacrei Saúde?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Na página inicial, clique em “Para pacientes” ou “Buscar atendimento” caso você seja um paciente. Caso você seja um profissional da saúde, clique em “Para profissionais” ou “Oferecer atendimento”.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Como faço para alterar o meu cadastro?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida clique em “Informações pessoais” e altere os dados que desejar. No final basta salvar as alterações realizadas.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Como faço para excluir meu cadastro na Lacrei Saúde?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida, acesse a aba “Privacidade”. Na seção “Minha conta”, clique em “Apagar minha conta”.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Esqueci minha senha. Como faço para acessar minha conta?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Na página de login/cadastro, clique em “Esqueci minha senha”. Preencha o campo com o e-mail que você utilizou para se cadastrar na Lacrei Saúde e clique em “Enviar link”. Você receberá um e-mail com um link para redefinir sua senha.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Não estou recebendo o e-mail de validação. O que faço?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Caso nosso e-mail não esteja na caixa de entrada, confira se o e-mail informado está escrito corretamente. Verifique também as outras pastas, a mensagem pode ter sido movida por um filtro de spam ou regra de e-mail, direcionando para a pasta de spam, lixo eletrônico, itens apagados, arquivo ou e-mail secundário. Caso o problema continue, envie um e-mail para contato@lacreisaude.com.br.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>O link para a minha redefinição de senha ou e-mail expirou. O que devo fazer?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Nosso link para redefinições possui um prazo de validade de 24 horas. Isso ajuda a evitar que contas sejam usadas indevidamente.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Não recebo o código SMS. O que eu faço?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Antes de ligar para a pessoa profissional, você precisa validar seu número de telefone. Para isso, você receberá um token de autenticação por SMS. Em aparelhos com sistema operacional Android ou iOS, existe a possibilidade do aplicativo de mensagens estar com algum problema por conta de falhas no software. Nesse caso, acesse as configurações do dispositivo e verifique se a solução está disponível, seja para todo o sistema ou apenas para o aplicativo de mensagens especificamente. Caso o problema não seja solucionado, recomendamos que você entre em contato com a sua operadora ou leve o aparelho à assistência técnica especializada.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Como busco uma pessoa profissional da saúde na Lacrei?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Após fazer o login, basta digitar o que procura em nosso campo de busca. Você pode fazer a busca digitando o nome da pessoa profissional, sintomas, especialidade, etnia, identidade de gênero ou sexualidade. Em seguida, clique em “Pesquisar”.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Como faço para registrar uma reclamação?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Buscamos melhorar cada vez mais. Caso sua experiência na Lacrei Saúde tenha sido insatisfatória em algum momento, envie um e-mail para suporte@lacreisaude.com.br.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Quero fazer uma denúncia. O que devo fazer?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Para fazer uma denúncia, você precisa fazer o login. Após o login, acesse a página da pessoa profissional que deseja denunciar e clique em “Denunciar”.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Por que preciso informar meu número de registro profissional?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question>
            <Answer>
              <p>Caso você seja uma pessoa profissional, precisamos do seu número de registro para manter um ambiente seguro dentro da Lacrei Saúde. Após a validação, vamos seguir com o seu cadastro em nosso site.</p>
            </Answer>
          </QuestionBox>
          <QuestionBox>
            <Question>
              <p>Qual o tempo de validação do meu cadastro?</p>
              <Image src={ArrowDown} alt="" width={16} height={16}/>
            </Question><Answer>
              <p>Após preencher todas as informações necessárias, você receberá um e-mail em até 2 dias úteis com os próximos passos para a finalização do seu cadastro na plataforma.</p>
            </Answer>
          </QuestionBox>
        </Faq>
        <Bottom>
          <BottomTitle>Não encontrou o que procurava?</BottomTitle>
          <BottomButton>Enviar e-mail</BottomButton>
        </Bottom>
      </Section>
    </MainContainer>
  )
}