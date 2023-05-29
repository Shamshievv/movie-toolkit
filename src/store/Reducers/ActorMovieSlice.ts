import { IActorMovies} from "../../types/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IActorMovie{
    movie : IActorMovies[]
    loader:boolean
    error:string
}
const initialState:IActorMovie = {
    movie:[],
    loader:false,
    error:""
}
export const ActorMovieSlice = createSlice({
    name:"actorMovie",
    initialState,
    reducers:{
        fetchingActorMovie(state){
            state.loader = true
        },
        fetchingActorMovieSuccess(state,action:PayloadAction<IActorMovies[]>){
            state.loader = false
            state.movie = action.payload
            state.error = ""
        },
        fetchingActorMovieError(state,action:PayloadAction<string>){
            state.loader = true
            state.movie = []
            state.error = action.payload
        }
    }
})
export default ActorMovieSlice.reducer
export const {fetchingActorMovie,fetchingActorMovieSuccess,fetchingActorMovieError} = ActorMovieSlice.actions