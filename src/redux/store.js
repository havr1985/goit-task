import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice.js"; 

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteReducer } from "./favoriteSlice.js";


const favConfig = {
  key: "favorite",
  storage,
  whitelist :['favorite'],
  
};

const rootReducer = combineReducers({
  cars:  carsReducer,
  favorite: persistReducer(favConfig, favoriteReducer),
  
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
