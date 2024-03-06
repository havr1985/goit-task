import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    makeSelect: "",
    priceSelect: 0,
    from: "",
    to: "",
  },

  reducers: {
    changeFilters(state, { payload }) {
      return (state = payload);
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilters } = filtersSlice.actions;