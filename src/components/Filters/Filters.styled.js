import styled from "styled-components";

export const Form = styled.form`
display: flex;
gap: 18px;
`

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  display: block;
  margin-bottom: 8px;
`;
export const Select = styled.select`
  width: 224px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
`;
export const PriceSelect = styled.select`
  width: 125px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;
  border-radius: 14px;
  padding: 14px 18px;
`;
export const InputFrom = styled.input`
  background-color: #f7f7fb;
  border: none;
  width: 160px;
  height: 48px;
  border-right: 1px solid #12141780;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  padding: 14px 93px 14px 24px;
  &::placeholder {
    color: black;
  }
`;
export const InputTo = styled.input`
  background-color: #f7f7fb;
  border: none;
  width: 160px;
  height: 48px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 14px 93px 14px 24px;
  &::placeholder {
    color: black;
  }
`;
export const SearchBtn = styled.button`
width: 136px;
height: 48px;
margin-top: 26px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: #0b44cd;
  }
`;