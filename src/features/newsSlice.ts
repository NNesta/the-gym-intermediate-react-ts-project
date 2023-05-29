import { createSlice } from "@reduxjs/toolkit";
import { initialsStateType } from "../Type";

const initialState: initialsStateType = {
  category: "all",
  filter: "",
  publisher: "",
  showPublishers: false,
};

export const newsSlice = createSlice({
  initialState,
  name: "news",
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
      state.publisher = "";
    },
    filterNews: (state, action) => {
      state.filter = action.payload;
    },
    setPublisher: (state, action) => {
      state.publisher = action.payload;
      state.category = "all";
      state.showPublishers = false;
    },
    setShowPublishers: (state) => {
      state.showPublishers = !state.showPublishers;
    },
  },
});

export const { changeCategory, filterNews, setPublisher, setShowPublishers } =
  newsSlice.actions;
export default newsSlice.reducer;
