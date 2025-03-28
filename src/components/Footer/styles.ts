"use client"

import styled from "styled-components"

export const TagFooter = styled.footer`
  margin: 0 auto;
  max-width: 1196px;
`

export const Line = styled.div`
  margin: 0 auto 48px;
  height: 1px;
  max-width: 1196px;
  display: flex;
  background-color: #b0e0d3;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 48px;
`

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

export const ColumnTwo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 8px;
`

export const Subtitle = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #1f1f1f;
`

export const FooterWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 24px;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 12px;
  color: #515151;
  font-weight: 400;
  line-height: 18px;
`

export const Text = styled.p`
  margin-top: 16px;
`

export const Button = styled.button`
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;
  color: #018762;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  cursor: pointer;
  outline: 0px;
  border: 2px solid #018762;
  border-radius: 8px;
  transition: 0.2s;
`