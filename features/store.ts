import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobReducer";
import { fetchJobsData } from "@/services/fetchJobsData";

export const store = configureStore({
  reducer: jobsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchJobsData,
      },
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
