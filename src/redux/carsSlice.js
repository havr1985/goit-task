import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit"
import { allCarsThunk, arrayCarsThunk } from "./carsOperation"


const INITIAL_STATE = {
    cars: [],
    carsArr: [],
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
            .addCase(arrayCarsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.carsArr = action.payload
            })
            .addMatcher(
                isAllOf(
                    allCarsThunk.pending,
                    arrayCarsThunk.pending,
                ),
                state => {
                    state.isLoading = true;
                    state.error = null;
                },
            )
            .addMatcher(
                isAnyOf(
                    allCarsThunk.rejected,
                    arrayCarsThunk.rejected,
                ),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            ),
});

export const carsReducer = carsSlice.reducer;