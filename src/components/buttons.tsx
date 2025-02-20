import styled from "styled-components"

export const Buttons = styled.div`
display: flex;
  height: 48px;
  gap: 24px;
`

export const Button = styled.button`
  height: 100%;
  border-radius: 8px;
  padding: 10px 32px;
  gap: 24px;
  border: none;
  background-color: var(--background);
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  color: var(--logo-color);

  &:hover {
    background-color: var(--bg-light-hover);
    cursor: pointer;
    transition: 0.2s;
  }
`

export const ButtonLogin = styled.button`
  width: 175px;
  height: 100%;
  border-radius: 8px;
  padding: 10px 32px;
  gap: 24px;
  border: none;
  background-color: var(--logo-color);
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  color: var(--background);

  &:hover {
    background-color: var(--bg-dark-hover);
    cursor: pointer;
    transition: 0.2s;
  }
`
