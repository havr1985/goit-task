import styled from "styled-components";

export const ModalWrapper = styled.div`
  padding: 40px 37px;
`;
export const ImgBox = styled.div`
  height: 268px;
  margin-bottom: 8px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 12px;
`;
export const TitleBlock = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const Span = styled.span`
  color: #3470ff;
`;
export const TextBox = styled.div`
  width: 277px;
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;
export const ContWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 24px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const Text = styled.p`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
`;
export const RentBtn = styled.button`
width: 168px;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: #0b44cd;
  }
`;
export const CloseBtn = styled.button`
position: absolute;
background: inherit;
top: 16px;
right: 16px;
`