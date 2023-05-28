import {IInformation} from "../../types/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInfo{
    info:Partial<IInformation>
    loader:boolean
    error:string
}
const initialState:IInfo = {
    info:{},
    loader:false,
    error:""
}
export const infoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        fetchingInfo(state){
            state.loader = true
        },
        fetchingInfoSuccess(state,action:PayloadAction<IInformation>){
            state.loader = false
            state.info = action.payload
            state.error = ""
        },
        fetchingInfoError(state,action:PayloadAction<string>){
            state.loader = true
            state.info = {}
            state.error = action.payload
        }

    }
})
export default infoSlice.reducer
export const {fetchingInfo,fetchingInfoSuccess,fetchingInfoError,} = infoSlice.actions