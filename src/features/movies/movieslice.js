import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieapi from '../../common/apis/movieapi'
import { APIkey } from '../../common/apis/Movieapikeys'
 export const fetchasynchmovies = createAsyncThunk('movies/fetchasynchmovies',async(term)=>{
    const response = await movieapi.get(`?apikey=${APIkey}&s=${term}&type=movie`).catch((er)=>{
        console.log(er)
    })
 //  console.log(response.data)
   return (response.data)
})
export const fetchasyncshows = createAsyncThunk('shows/fetchasynchshows',async(term)=>{
    
    const response = await movieapi.get(`?apikey=${APIkey}&s=${term}&type=series`).catch((er)=>{
        console.log(er)
    })
   console.log(response.data)
   return (response.data)
})
export const fetchasynchdetails = createAsyncThunk('details/fetchasynchmoviesorshowdetails',async(id)=>{
    
    const response = await movieapi.get(`?apikey=${APIkey}&i=${id}&Plot=full`).catch((er)=>{
        console.log(er)
    })
 //  console.log(response.data)
   return (response.data)
})
const initialState = {
    movies:{},
    shows:{},
    details:{},
    load:true
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
        [fetchasynchmovies.pending] : (state)=>{
            return {...state,load:true}
        },
        [fetchasynchmovies.fulfilled] : (state,{payload})=>{
            console.log('fetcjed succesfully')
            return {...state,movies:payload,load:false}
        },
        [fetchasynchmovies.rejected] : ()=>{
            console.log('rejected')
        },
        [fetchasyncshows.fulfilled] : (state,{payload})=>{
            console.log('fetcjed succesfully')
            return {...state,shows:payload,load:false}
        },
        [fetchasynchdetails.fulfilled] : (state,{payload})=>{
            console.log('fetcjed succesfully')
            return {...state,details:payload,load:false}
        },
    }

})
export const {addmovies} = movieslice.actions
export const getallmovies = (state)=> state.movies.movies
export const getallshows = (state)=> state.movies.shows
export const getdetails = (state) => state.movies.shows
export const getloader = (state) => state.movies.load
export default movieslice.reducer;