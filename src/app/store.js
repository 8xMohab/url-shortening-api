import { configureStore } from "@reduxjs/toolkit";
import urlSliceReducer from "../features/url/urlSlice";
import apiSlice from "../features/api/apiSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    urls: urlSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
