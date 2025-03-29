"use client"

import styled from "styled-components"

export const Container = styled.div`
  padding: 3rem 5rem 4rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
` 

export const SectionOne = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  width: 100%;
  position: relative;

  @media (max-width: 480px) {
    margin-top: 0px;
  }

  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SectionOneTitle = styled.h2`
  width: 35.4rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: auto;
    line-height: 2.5rem;
  }
`

export const LineOne = styled.div`
  width: 10rem;
  height: 2px;
  background: #018762;
  border-radius: 4px;
  margin-top: 0.5rem;
`

export const SectionOneDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: #2d2d2d;
  width: 34rem;

  @media (max-width: 480px) {
    width: 20.4rem;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const SectionOneImage = styled.img`
  color: transparent;
  width: 30.7rem;
  height: 30.7rem;
  margin-top: 8rem;
  border-radius: 2rem;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto 3rem;

  @media (max-width: 640px) {
    margin: 2.5rem auto;
  }

  @media (max-width: 1100px) {
    align-items: flex-start;
  }
`

export const SectionTwoTitle = styled.h2`
  width: 35.4rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f1f1f;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: auto;
    line-height: 2.5rem;
  }
`

export const LineTwo = styled.div`
  margin: 0.5rem 0px 1.5rem;
  width: 10rem;
  height: 2px;
  background: #018762;
  border-radius: 4px;
`

export const SectionTwoDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: #1f1f1f;

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const CenterSide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex: 1 1 0%;

  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SectionTwoImage = styled.img`
  color: transparent;
  width: 50rem;
  height: 28.625rem;
  object-fit: cover;
  border-radius: 1rem;

  @media (max-width: 480px) {
    height: 11rem;
  }

  @media (max-width: 832px) {
    width: 100%;
    border-radius: 10px;
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0.1rem 0px 0px -5rem;

  @media (max-width: 480px) {
    margin-top: 2rem;
    margin-bottom: 0px;
  }

  @media (max-width: 1100px) {
    margin: 1rem 0px;
  }
`

export const Box = styled.div`
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  backdrop-filter: blur(7.5px);
  background-color: #fff;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1 1 0%;
    flex-direction: row;
    padding-top: 1rem;
  }

  @media (max-width: 1100px) {
    padding: 1rem;
  }
`

export const Icon = styled.img`
  color: transparent;
  width: 4.37rem;
  height: 4.37rem;
  margin-right: 1.5rem;

  @media (max-width: 640px) {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (max-width: 832px) {
    border-radius: 10px;
  }
`

export const InsideBox = styled.div`
  width: 16.25rem;

  @media (max-width: 1100px) {
    width: auto;
  }
`

export const BoxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%) text;;
  margin: 0px;
  padding: 0px;

  @media (max-width: 640px) {
    font-size: 1.125rem;
    margin: -0.2rem 0px 0.5rem -0.5rem;
  }

  @media (max-width: 768px) {
    padding-top: 0%.3rem;
  }
`

export const BoxDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #2d2d2d;
  margin: 0px;
  padding: 0px;

  @media (max-width: 640px) {
    padding-top: 0.5rem;
    margin-left: -3rem;
  }
`

export const SectionThree = styled.section`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`

export const LeftSideTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  position: relative;

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`

export const SectionThreeTitle = styled.h2`
  width: 35.4rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  color: #1f1f1f;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: auto;
    line-height: 2.5rem;
  }
`

export const SectionThreeDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  max-width: 34rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: #2d2d2d;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (max-width: 1100px) {
    max-width: 50rem;
  }
`

export const SectionThreeImage = styled.img`
  color: transparent;
  height: 23.6rem;
  width: 34.1rem;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 10rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1.5rem;
  }
`