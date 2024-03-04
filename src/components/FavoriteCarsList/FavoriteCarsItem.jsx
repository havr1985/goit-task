import { useSelector } from "react-redux"
import { selectFavoriteCars, selectIsLoading } from "../../redux/carsSelectors"
import { Container, Item, ItemBox } from "../CarsList/CardList.styled";
import { CarsListItems } from "../CarsListItems/CarsListItems";

export const FavoriteCarsList = () => {

    const favoriteCars = useSelector(selectFavoriteCars);
    const isLoading = useSelector(selectIsLoading)


    return (
      <Container>
        <ItemBox>
          {isLoading && <div>Loading...</div>}
          {favoriteCars.map((car) => (
            <Item key={car.id}>
              <CarsListItems car={car} />
            </Item>
          ))}
        </ItemBox>
      </Container>
    );
}