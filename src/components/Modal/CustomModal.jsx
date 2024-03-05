import Modal from "react-modal"
import { CloseBtn, ContWrap, ContentWrap, Description, Img, ImgBox, ModalWrapper, RentBtn, Span, Text, TextBox, TitleBlock } from "./CustomModal.styled";
import { X } from "lucide-react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "541px",
    height: "752px",
    borderRadius: 24,
    position: "relative",
  },
  overlay: {
    backgroundColor: "#12141780",
  },
};

export const CustomModal = ({ modalIsOpen, afterOpenModal, closeModal, car }) => {
  const {
    car: {
      id,
      make,
      model,
      year,
      address,
      type,
      fuelConsumption,
      engineSize,
      description,
      accessories,
      functionalities,
      rentalConditions,
      mileage,
      rentalPrice,
      img,
    },
  } = car;

  const newAddress = address.split(" ").slice(-2).join(" ").replace(/,/g, "|");
  const newRentalConditions = rentalConditions.split("\n")
  
  const handlerTel = () => {
    const telNumber = "+380730000000";
    window.location.href = 'tel:' + telNumber
  }
    
    Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ModalWrapper>
        <CloseBtn onClick={closeModal}><X/></CloseBtn>
        <ImgBox>
          <Img src={img} alt={make} />
        </ImgBox>
        <TitleBlock>
          <p>
            {make} <Span>{model},</Span> {year}
          </p>
        </TitleBlock>
        <TextBox>
          <p>
            {newAddress} | id: {id} | Year: {year} | Type: {type} | Fuel
            Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
        </TextBox>
        <Description>{description}</Description>
        <div>
          <p>Accessories and functionalities:</p>
          <ContWrap>
            {accessories.map((item, idx) => (
              <p key={idx}>{item} | </p>
            ))}
            {functionalities.map((item, idx) => (
              <p key={idx}>{item} | </p>
            ))}
          </ContWrap>
          <div>
            <p>Rental Conditions: </p>
            <ContentWrap>
              {newRentalConditions.map((item, idx) => (
                <Text key={idx}>{item}</Text>
              ))}
              <Text>
                Miliage: <Span>{mileage}</Span>
              </Text>
              <Text>
                Price: <Span>{rentalPrice}</Span>
              </Text>
            </ContentWrap>
          </div>
        </div>
        <RentBtn onClick={handlerTel}>Rental car</RentBtn>
      </ModalWrapper>
    </Modal>
  );
};