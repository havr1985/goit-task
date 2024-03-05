import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectIsLoading, selectVisibleCars } from "../../redux/carsSelectors";
import { CarsListItems } from "../CarsListItems/CarsListItems";
import { Container, Item, ItemBox, LoadMore } from "./CardList.styled";
import { useEffect, useState } from "react";
import { allCarsThunk, arrayCarsThunk } from "../../redux/carsOperation";

export const CarsList = () => {
  let cars = useSelector(selectAllCars);
  const visible = useSelector(selectVisibleCars)
  console.log(visible)
  if (visible) {
    cars = visible
  }
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCarsThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(arrayCarsThunk())
  }, [dispatch])

  const clickLoadMore = () => {
    setPage(prev => prev + 1)
  }
  
  const isDivisible = cars.length % 12 === 0 ? true : false
  console.log(isDivisible)

  return (
    <Container>
      <ItemBox>
        {isLoading && <div>Loading...</div>}
        
        {cars.map((car) => <Item key={car.id}>
          <CarsListItems car={car} />
        </Item>
            
        )}
      </ItemBox>
      {isDivisible ? (<LoadMore type="button" onClick={clickLoadMore}>Load more</LoadMore>): ''}
      
    </Container>
  );
};
