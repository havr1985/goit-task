import { useSelector } from "react-redux"
import { selectFavoriteCars, selectIsLoading } from "../../redux/carsSelectors"
import { Container, Item, ItemBox, NotCars } from "../CarsList/CardList.styled";
import { CarsListItems } from "../CarsListItems/CarsListItems";
import { Loader } from "../Loader";

export const FavoriteCarsList = () => {

  const favoriteCars = useSelector(selectFavoriteCars);
  const isLoading = useSelector(selectIsLoading);




    return (
      <Container>
        <ItemBox>
          {isLoading && <Loader/>}
          {!favoriteCars.length && <NotCars>You dont have favorites cars</NotCars>}
          {favoriteCars.map((car) => (
            <Item key={car.id}>
              <CarsListItems car={car} />
            </Item>
          ))}
        </ItemBox>
      </Container>
    );
}