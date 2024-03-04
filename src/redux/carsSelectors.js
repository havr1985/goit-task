import { createSelector } from "@reduxjs/toolkit";

const selectCars = state => state.cars;

export const selectAllCars = createSelector(selectCars, cars => cars.cars) 
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavoriteCars = state => state.favorite.favorite