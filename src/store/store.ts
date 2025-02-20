import { configureStore } from "@reduxjs/toolkit";
import classInfoReducer from 'Module/classListModule/ClassInfoSlice'
export const store = configureStore({
   reducer: {
      classInfoReducer: classInfoReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch