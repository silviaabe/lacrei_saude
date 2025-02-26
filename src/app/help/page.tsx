"use client"

import * as S from "./styles"

import ArrowRight from "./arrow-right.png"
import ArrowDown from "./arrow-down.png"
import ArrowUp from "./arrow-up.png"
import Image from "next/image"
import { useState } from "react"

const faqData = [
  {
    question: "Como faço para me cadastrar na Lacrei Saúde?",
    answer:
      "Na página inicial, clique em “Para pacientes” ou “Buscar atendimento” caso você seja um paciente. Caso você seja um profissional da saúde, clique em “Para profissionais” ou “Oferecer atendimento”.",
  },
  {
    question: "Como faço para alterar o meu cadastro?",
    answer:
      "Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida clique em “Informações pessoais” e altere os dados que desejar. No final basta salvar as alterações realizadas.",
  },
  {
    question: "Como faço para excluir meu cadastro na Lacrei Saúde?",
    answer:
      "Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida, acesse a aba “Privacidade”. Na seção “Minha conta”, clique em “Apagar minha conta”.",
  },
  {
    question: "Esqueci minha senha. Como faço para acessar minha conta?",
    answer:
      "Na página de login/cadastro, clique em “Esqueci minha senha”. Preencha o campo com o e-mail que você utilizou para se cadastrar na Lacrei Saúde e clique em “Enviar link”. Você receberá um e-mail com um link para redefinir sua senha.",
  },
  {
    question: "Não estou recebendo o e-mail de validação. O que faço?",
    answer:
      "Caso nosso e-mail não esteja na caixa de entrada, confira se o e-mail informado está escrito corretamente. Verifique também as outras pastas, a mensagem pode ter sido movida por um filtro de spam ou regra de e-mail, direcionando para a pasta de spam, lixo eletrônico, itens apagados, arquivo ou e-mail secundário. Caso o problema continue, envie um e-mail para contato@lacreisaude.com.br.",
  },
  {
    question: "O link para a minha redefinição de senha ou e-mail expirou. O que devo fazer?",
    answer:
      "Nosso link para redefinições possui um prazo de validade de 24 horas. Isso ajuda a evitar que contas sejam usadas indevidamente.",
  },
  {
    question: "Não recebo o código SMS. O que eu faço?",
    answer:
      "Antes de ligar para a pessoa profissional, você precisa validar seu número de telefone. Para isso, você receberá um token de autenticação por SMS. Em aparelhos com sistema operacional Android ou iOS, existe a possibilidade do aplicativo de mensagens estar com algum problema por conta de falhas no software. Nesse caso, acesse as configurações do dispositivo e verifique se a solução está disponível, seja para todo o sistema ou apenas para o aplicativo de mensagens especificamente. Caso o problema não seja solucionado, recomendamos que você entre em contato com a sua operadora ou leve o aparelho à assistência técnica especializada.",
  },
  {
    question: "Como busco uma pessoa profissional da saúde na Lacrei?",
    answer:
      "Após fazer o login, basta digitar o que procura em nosso campo de busca. Você pode fazer a busca digitando o nome da pessoa profissional, sintomas, especialidade, etnia, identidade de gênero ou sexualidade. Em seguida, clique em “Pesquisar”.",
  },
  {
    question: "Como faço para registrar uma reclamação?",
    answer:
      "Buscamos melhorar cada vez mais. Caso sua experiência na Lacrei Saúde tenha sido insatisfatória em algum momento, envie um e-mail para suporte@lacreisaude.com.br.",
  },
  {
    question: "Quero fazer uma denúncia. O que devo fazer?",
    answer:
      "Para fazer uma denúncia, você precisa fazer o login. Após o login, acesse a página da pessoa profissional que deseja denunciar e clique em “Denunciar”.",
  },
  {
    question: "Por que preciso informar meu número de registro profissional?",
    answer:
      "Caso você seja uma pessoa profissional, precisamos do seu número de registro para manter um ambiente seguro dentro da Lacrei Saúde. Após a validação, vamos seguir com o seu cadastro em nosso site.",
  },
  {
    question: "Qual o tempo de validação do meu cadastro?",
    answer:
      "Após preencher todas as informações necessárias, você receberá um e-mail em até 2 dias úteis com os próximos passos para a finalização do seu cadastro na plataforma.",
  },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <S.Container>
      <S.Section>
        <div>
          <S.Nav>
            <S.NavLink>
              <S.LinkOne>
                <S.Link1 href="/">Início</S.Link1>
                <Image src={ArrowRight} alt="" width={9} height={14}/>
              </S.LinkOne>
              <S.LinkTwo>Dúvidas Frequentes</S.LinkTwo>
            </S.NavLink>
          </S.Nav>
          <S.Title>Dúvidas Frequentes</S.Title>
        </div>
        <S.Subtitle>Aqui, você encontra as dúvidas mais frequentes!</S.Subtitle>
        <S.Faq>
        {faqData.map((item, index) => (
          <S.QuestionBox key={index}>
            <S.Question onClick={() => handleToggleAnswer(index)}>
              <p>{item.question}</p>
              <Image src={openIndex === index ? ArrowUp : ArrowDown} alt="seta para cima ou para baixo" width={16} height={16}/>
            </S.Question>
            {openIndex === index && (
            <S.Answer>
              <p>{item.answer}</p>
            </S.Answer>
            )}
          </S.QuestionBox>
        ))}
        </S.Faq>
        <S.Bottom>
          <S.BottomTitle>Não encontrou o que procurava?</S.BottomTitle>
          <S.BottomButton>Enviar e-mail</S.BottomButton>
        </S.Bottom>
      </S.Section>
    </S.Container>
  )
}