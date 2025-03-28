import styled from "styled-components"

export const Buttons = styled.div`
  display: flex;
  height: 48px;
  gap: 24px;
`

export const Button = styled.button`
  font-family: "Manrope", sans-serif;
  height: 100%;
  border-radius: 8px;
  padding: 10px 32px;
  gap: 24px;
  border: none;
  background-color: var(--background);
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  color: var(--main-color);

  &:hover {
    background-color: var(--bg-light-hover);
    cursor: pointer;
    transition: 0.2s;
  }
`

export const ButtonLogin = styled.button`
  font-size: 18px;
  font-weight: 700;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  background-color: #018762;
  height: 48px;
  line-height: 28px;
  border: 2px solid #018762;
  border-radius: 8px;
  color: #fff;
  letter-spacing: 0.32px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--bg-dark-hover);
  }
`
