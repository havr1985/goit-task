import styled from "styled-components";

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center center;
border-radius: 12px;
`
export const CardBox = styled.div`
  height: 268px;
`
export const TitleBlock = styled.div`
  display: flex;
  height: 24px;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const Span = styled.span`
  color: #3470FF;
`
export const ContBox = styled.div`
  margin-top: 9px;
  margin-bottom: 28px;
  height: 40px;
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`

export const MoreBtn = styled.button`
  width: 100%;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: #0b44cd;
  }
`
export const HeartBtn = styled.button`
position: absolute;
background-color: inherit;
top: 14px;
right: 14px;
`

