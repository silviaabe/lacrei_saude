"use client"

import styled from "styled-components"

export const Container = styled.div`
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