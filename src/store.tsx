import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { newsApi } from "./features/apiSlice";
import NewsReducer from "./features/newsSlice";

const store = configureStore({
  reducer: {
    news: NewsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

const Context = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Context;
