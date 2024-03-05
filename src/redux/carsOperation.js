import { createAsyncThunk } from "@reduxjs/toolkit";
import { requiredAllCars, requiredArrCars } from "../components/service/api";

export const allCarsThunk = createAsyncThunk(
    'cars/allcars',
    async (page, thunkAPI) => {
        try {
        
            const cars = await requiredAllCars(page);
            return cars;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const arrayCarsThunk = createAsyncThunk(
    'cars/arrayCars',
    async (_, thunkAPI) => {
        try {
            const arrCars = await requiredArrCars()
            return arrCars;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)