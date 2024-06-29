import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from './cinovaSlice'

export const store = configureStore({
  reducer: {
    movieoData : movieoReducer
  },
})