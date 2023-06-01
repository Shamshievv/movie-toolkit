import {IDetail, ISearch} from "../../types/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    search: ISearch[]
    loader:boolean
    error:string
}
const initialState:IState = {
    search : [],
    loader: false,
    error : ""

}
export const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers : {
        fetchingSearch(state) {
            state.loader = true
        },
        fetchingSearchSuccess(state, action: PayloadAction<ISearch[]>) {
            state.loader = false
            state.search = action.payload
            state.error = ""
        },
        fetchingSearchError(state, action: PayloadAction<string>) {
            state.loader = true
            state.search = []
            state.error = action.payload
        }
    }
})
export default SearchSlice.reducer
export const {fetchingSearch,fetchingSearchSuccess,fetchingSearchError} = SearchSlice.actions