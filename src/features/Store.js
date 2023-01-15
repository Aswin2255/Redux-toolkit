import { configureStore } from '@reduxjs/toolkit';
import movieslice from './movies/movieslice';
export const store = configureStore({
  reducer:  {
        movies:movieslice,
    }
   
})