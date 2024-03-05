import { Heart } from "lucide-react";
import { CardBox, ContBox, Img, MoreBtn, Span, TitleBlock, HeartBtn } from "./CarsListItem.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from "../../redux/favoriteSlice";
import { selectFavoriteCars } from "../../redux/carsSelectors";
import { CustomModal } from "../Modal/CustomModal";

export const CarsListItems = (car) => {
  const {
    car: {
      id,
      img,
      make,
      model,
      year,
      rentalPrice,
      address,
      rentalCompany,
      type,
      mileage,
      accessories,
    },
  } = car;
  const newAddress = address.split(" ").slice(-2).join(' ').replace(/,/g, '|');

  const favoritesCar = useSelector(selectFavoriteCars);

  const isFavoriteCar = favoritesCar.some(car => car.id === id)

  const dispatch = useDispatch()

  const [pressed, setPressed] = useState(isFavoriteCar);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handlerPressed = () => {
    setPressed(prev => !prev)
    dispatch(changeFavorite(car.car));

  }

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    
  }

    return (
      <div>
        <CardBox>
          <Img src={img} alt={id} />
        </CardBox>
        <TitleBlock>
          <p>
            {make} <Span>{model}</Span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </TitleBlock>
        <ContBox>
          <p>{newAddress} | {rentalCompany} | {type} | {make} | {mileage} | {accessories[0]}</p>
        </ContBox>
        <MoreBtn type="button" onClick={openModal}>Learn more</MoreBtn>
        <HeartBtn onClick={handlerPressed} >
         {pressed ? (<Heart color="#3470FF" fill="#3470FF"/>) : (<Heart color="white"/>)} 
        </HeartBtn>
        {modalIsOpen && (<CustomModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          car={car}
        />)}
      </div>
    );
}