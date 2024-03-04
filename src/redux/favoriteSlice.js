import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    favorite: [],
}


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: INITIAL_STATE,

    reducers: {
        changeFavorite(state, { payload }) {
            const idx = state.favorite.findIndex(item => item.id === payload.id);
            if (idx === -1) {
                state.favorite.push(payload)
            } else {
                state.favorite.splice(idx, 1)
            }
        },
    },
}
);

export const favoriteReducer = favoriteSlice.reducer;
export const { changeFavorite } = favoriteSlice.actions;