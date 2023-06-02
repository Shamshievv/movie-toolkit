import { IActorMovies} from "../../types/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IActorMovie{
    movie : IActorMovies[]
    loader:boolean
    error:string
    language : string
}
const initialState:IActorMovie = {
    movie:[],
    loader:false,
    error:"",
    language : "en-US"
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
            state.loader = false
            state.movie = []
            state.error = action.payload
        },
        fetchingLanguage(state,action){
            state.language = action.payload
        }

    }
})
export default ActorMovieSlice.reducer
export const {fetchingActorMovie,fetchingLanguage,fetchingActorMovieSuccess,fetchingActorMovieError} = ActorMovieSlice.actions