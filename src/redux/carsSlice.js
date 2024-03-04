import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit"
import { allCarsThunk } from "./carsOperation"


const INITIAL_STATE = {
    cars: [],
    isLoading: false,
    error: null,
    page: 1,
}

const carsSlice = createSlice({
    name: 'cars',
    initialState: INITIAL_STATE,
    extraReducers: builder =>
        builder
            .addCase(allCarsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                if (action.meta.arg === 1) {
                    state.cars = []
                }
            
                state.cars = [...state.cars, ...action.payload];
            })
            .addMatcher(
                isAllOf(
                    allCarsThunk.pending,
                ),
                state => {
                    state.isLoading = true;
                    state.error = null;
                },
            )
            .addMatcher(
                isAnyOf(
                    allCarsThunk.rejected,
                ),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            ),
});

export const carsReducer = carsSlice.reducer;