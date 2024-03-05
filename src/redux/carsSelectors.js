import { createSelector } from "@reduxjs/toolkit";

const selectCars = state => state.cars;

export const selectAllCars = createSelector(selectCars, cars => cars.cars) 
export const selectArrayCars = createSelector(selectCars, (cars) => cars.carsArr);
export const selectFilters = state => state.filters 
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavoriteCars = state => state.favorite.favorite;

export const selectVisibleCars = createSelector(
    [selectArrayCars, selectFilters],
    (cars, filters) => {
        let visibleCars = cars
        if (filters.makeSelect) {
            visibleCars = visibleCars.filter((item) => item.make === filters.makeSelect);
            
        }
        if (filters.priceSelect) {
             visibleCars = cars.filter(
                (item) => 
                   item.rentalPrice.slice((1), 10) === filters.priceSelect

            );
        }
        return visibleCars
    }
)