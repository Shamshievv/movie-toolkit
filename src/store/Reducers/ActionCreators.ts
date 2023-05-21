import {AppDispatch} from "../store";
import {fetchingError, fetchingMovie, fetchingSuccess} from "./movieSlice";
import axios from "axios";
import {API_KEY} from "../../API/API";

export const getPopular = () => {
    return async (dispatch:AppDispatch) => {
       try {
           dispatch(fetchingMovie())
           const responsive = await axios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY}`)
           dispatch(fetchingSuccess(responsive.data.results))
       }
       catch (e:any){
         dispatch(fetchingError(e.message))
       }
   }
}
export const getTopRated = () => {
   return async (dispatch:AppDispatch) => {
       try {
           dispatch(fetchingMovie())
           const responsive = await axios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date&api_key=${API_KEY}`)
           dispatch(fetchingSuccess(responsive.data.results))
       }
       catch (e:any){
         dispatch(fetchingError(e.message))
       }
   }
}
