import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducers/movieSlice";
import detailSlice from "./Reducers/detailSlice";
import actorSlice from "./Reducers/ActorSlice";
import infoSlice from "./Reducers/infoSlice";
const rootReducer = combineReducers({
    movieSlice,
    detailSlice,
    actorSlice,
    infoSlice
})
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}
export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore[`dispatch`]