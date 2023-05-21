import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducers/movieSlice";

const rootReducer = combineReducers({
    movieSlice
})
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}
export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore[`dispatch`]