import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieapi from '../../common/apis/movieapi'
import { APIkey } from '../../common/apis/Movieapikeys'
 export const fetchasynchmovies = createAsyncThunk('movies/fetchasynchmovies',async()=>{
    const movietext = 'harry'
    const response = await movieapi.get(`?apikey=${APIkey}&s=${movietext}&type=movie`).catch((er)=>{
        console.log(er)
    })
 //  console.log(response.data)
   return (response.data)
})
export const fetchasyncshows = createAsyncThunk('shows/fetchasynchshows',async()=>{
    const seriestext = 'Friends'
    const response = await movieapi.get(`?apikey=${APIkey}&s=${seriestext}&type=series`).catch((er)=>{
        console.log(er)
    })
 //  console.log(response.data)
   return (response.data)
})
const initialState = {
    movies:{},
    shows:{},
}
const movieslice = createSlice({
    name:'movies',
    initialState,

    reducers:{
        addmovies:(state,{payload})=>{
            console.log(state,payload)
            state.movies = payload
        }
    },
    extraReducers:{
        [fetchasynchmovies.pending] : ()=>{
            console.log('pending')
        },
        [fetchasynchmovies.fulfilled] : (state,{payload})=>{
            console.log('fetcjed succesfully')
            return {...state,movies:payload}
        },
        [fetchasynchmovies.rejected] : ()=>{
            console.log('rejected')
        },
        [fetchasyncshows.fulfilled] : (state,{payload})=>{
            console.log('fetcjed succesfully')
            return {...state,shows:payload}
        },
    }

})
export const {addmovies} = movieslice.actions
export const getallmovies = (state)=> state.movies.movies
export const getallshows = (state)=> state.movies.shows
export default movieslice.reducer;