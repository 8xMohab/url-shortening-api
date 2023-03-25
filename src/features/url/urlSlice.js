import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

const urlSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    setNewUrls: (state, { payload }) => {
      state.value.push(payload)
    },
    setLocalUrls: (state, {payload}) => {
      state.value = [...state.value, ...payload];
    }
  },
});

export const { setNewUrls, setLocalUrls } = urlSlice.actions;
export const useUrlSlice = (state) => state.urls.value;
export default urlSlice.reducer;
