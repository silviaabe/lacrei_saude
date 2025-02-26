"use client"

import styled from "styled-components"

export const Container = styled.div`
  @media (max-width: 1400px) {
  padding: 48px 80px 64px;
  }
` 

export const SectionOne = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  width: 100%;
  position: relative;
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
`

export const SectionOneImage = styled.img`
  color: transparent;
  width: 30.7rem;
  height: 30.7rem;
  margin-top: 8rem;
  border-radius: 2rem;
`

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto 3rem;
`

export const SectionTwoTitle = styled.h2`
  width: 45rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f1f1f;
  line-height: 3rem;
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
`

export const CenterSide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex: 1 1 0%;
`

export const SectionTwoImage = styled.img`
  color: transparent;
  width: 50rem;
  height: 28.625rem;
  object-fit: cover;
  border-radius: 1rem;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0.1rem 0px 0px -5rem;
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
`

export const Icon = styled.img`
  color: transparent;
  width: 4.37rem;
  height: 4.37rem;
  margin-right: 1.5rem;
`

export const InsideBox = styled.div`
  width: 16.25rem;
`

export const BoxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%) text;;
  margin: 0px;
  padding: 0px;
`

export const BoxDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #2d2d2d;
  margin: 0px;
  padding: 0px;
`

export const SectionThree = styled.section`
  display: flex;

  @media (max-width: 1440px) {
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
`

export const LeftSideTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  position: relative;
`

export const SectionThreeTitle = styled.h2`
  width: 45rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  color: #1f1f1f;
`

export const SectionThreeDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  max-width: 34rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: #2d2d2d;
`

export const SectionThreeImage = styled.img`
  color: transparent;
  height: 23.6rem;
  width: 34.1rem;
  border-radius: 10px;
  object-fit: cover;
`