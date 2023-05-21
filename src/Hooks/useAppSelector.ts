import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/store";

export  const useAppSelector:TypedUseSelectorHook<rootState> = useSelector