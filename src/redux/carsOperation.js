import { createAsyncThunk } from "@reduxjs/toolkit";
import { requiredAllCars } from "../components/service/api";

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