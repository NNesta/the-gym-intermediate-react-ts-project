import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateType, stateType } from "../Type";

const initialState: initialStateType = {
  category: "all",
  filter: "",
  publisher: "",
  showPublishers: false,
};

export const newsSlice = createSlice({
  initialState,
  name: "news",
  reducers: {
    changeCategory: (state: stateType, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.publisher = "";
    },
    filterNews: (state: stateType, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setPublisher: (state: stateType, action: PayloadAction<string>) => {
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
