import {IMovie} from "../../types/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    movie:IMovie[]
    loader:boolean
    error:string
}
const initialState:IState = {
    movie:[],
    loader:false,
    error:``
}
export const movieSlice = createSlice({
    name : `movie`,
    initialState,
    reducers:{
        fetchingMovie(state){
            state.loader = true
        },
        fetchingSuccess(state,action:PayloadAction<IMovie[]>){
            state.loader = false
            state.movie = action.payload
            state.error =  ``
        },
        fetchingError(state,action:PayloadAction<string>){
            state.loader = false
            state.movie= []
            state.error = action.payload
        }
    }
})

export default movieSlice.reducer

export const  {fetchingMovie,fetchingSuccess,fetchingError} = movieSlice.actions