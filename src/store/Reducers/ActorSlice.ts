import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActors} from "../../types/interfaces";

interface IActor{
    actor:IActors[]
    loader:boolean
    error:string
}
const initialState:IActor ={
    actor:[],
    loader:false,
    error:""

}
export const actorSlice = createSlice({
    name:"actor",
    initialState,
    reducers:{
        fetchingActors(state){
            state.loader = true
        },
        fetchingActorsSuccess(state,action:PayloadAction<IActors[]>){
           state.loader = false
           state.actor = action.payload
           state.error = ""
        },
        fetchingActorsError(state,action:PayloadAction<string>){
            state.loader = true
            state.actor = []
            state.error = action.payload
        }
    }
})
export default actorSlice.reducer
export const {fetchingActors,fetchingActorsSuccess, fetchingActorsError} = actorSlice.actions