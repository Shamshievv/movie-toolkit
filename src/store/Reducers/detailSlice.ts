import {IDetail} from "../../types/interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    detail: Partial<IDetail>
    loader: boolean
    error: string
}

const initialState:IState = {
    detail: {},
    loader: false,
    error: ""
}
export const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        fetchingDetail(state) {
            state.loader = true
        },
        fetchingDetailSuccess(state, action: PayloadAction<IDetail>) {
            state.loader = false
            state.detail = action.payload
            state.error = ""
        },
        fetchingDetailError(state, action: PayloadAction<string>) {
            state.loader = true
            state.detail = {}
            state.error = action.payload
        }
    }
})
export default detailSlice.reducer
export const {fetchingDetail, fetchingDetailSuccess, fetchingDetailError} = detailSlice.actions