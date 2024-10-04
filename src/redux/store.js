import { configureStore } from "@reduxjs/toolkit";
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
import trucksReducer from "./trucks/slice";
import filterReducer from "./filteredTracks/slice";
import selectReducer from "./selectedTracks/slice";

const selectPersistConfig = {
  key: "select",
  storage,
  whitelist: ["items"], //внести властивості, які треба зберегти в локальному сховищі
};

const persistedSelectReducer = persistReducer(
  selectPersistConfig,
  selectReducer
);

const filterPersistConfig = {
  key: "filter",
  storage,
  whitelist: ["value"], //внести властивості, які треба зберегти в локальному сховищі
};

const persistedfilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filtersTracks: persistedfilterReducer,
    selectedTracks: persistedSelectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
