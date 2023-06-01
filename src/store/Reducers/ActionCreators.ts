import {AppDispatch} from "../store";
import {fetchingError, fetchingMovie, fetchingSuccess} from "./movieSlice";
import axios from "axios";
import {API_KEY} from "../../API/API";
import {fetchingDetail, fetchingDetailError, fetchingDetailSuccess} from "./detailSlice";
import {fetchingActors, fetchingActorsError, fetchingActorsSuccess} from "./ActorSlice";
import {fetchingInfo, fetchingInfoError, fetchingInfoSuccess} from "./infoSlice";
import {
    fetchingActorMovie,
    fetchingActorMovieError,
    fetchingActorMovieSuccess,
    fetchingLanguage
} from "./ActorMovieSlice";
import {fetchingSearch, fetchingSearchError, fetchingSearchSuccess} from "./SearchSlice";

export const getPopular = (page:number,language:any) => {
    return async (dispatch:AppDispatch) => {
       try {
           dispatch(fetchingMovie())
           const responsive = await axios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language
           }&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY}`)
           dispatch(fetchingSuccess(responsive.data.results))
       }
       catch (e:any){
         dispatch(fetchingError(e.message))
       }
   }
}
export const getTopRated = (page:number,language : any) => {
   return async (dispatch:AppDispatch) => {
       try {
           dispatch(fetchingMovie())
           const responsive = await axios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${page}&sort_by=popularity.desc&with_release_type=2|3&release_date&api_key=${API_KEY}`)
           dispatch(fetchingSuccess(responsive.data.results))
       }
       catch (e:any){
         dispatch(fetchingError(e.message))
       }
   }
}

export const getDetails = (id:any,language:any) => {
    return async (dispatch:AppDispatch) => {
        try {
            dispatch(fetchingDetail())
            const responsive = await axios(` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`)
            dispatch(fetchingDetailSuccess(responsive.data))
        }
        catch (e:any){
            dispatch(fetchingDetailError(e.messages))
        }
    }
}
export const getActors = (id:any) => {
    return async(dispatch:AppDispatch) => {
        try {
            dispatch(fetchingActors())
            const responsive = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
            dispatch(fetchingActorsSuccess(responsive.data.cast))
        }
        catch (e:any){
            dispatch(fetchingActorsError(e.messages))
        }
    }
}
export const getInfo = (id:any) => {
    return async(dispatch:AppDispatch) => {
        try {
            dispatch(fetchingInfo())
            const responsive = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
            dispatch(fetchingInfoSuccess(responsive.data))
        }
        catch (e:any){
            dispatch(fetchingInfoError(e.messages))
        }
    }
}
export const getActorMovie = (id:any) => {
    return async(dispatch:AppDispatch) => {
        try {
            dispatch(fetchingActorMovie())
            const responsive = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
            dispatch(fetchingActorMovieSuccess(responsive.data.cast))
        }
        catch (e:any){
            dispatch(fetchingActorMovieError(e.messages))
        }
    }
}
export const getSearchMovie = (movieName:any) => {
    return async(dispatch:AppDispatch) => {
        try {
            dispatch(fetchingSearch())
            const responsive = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName})
`)
            dispatch(fetchingSearchSuccess(responsive.data.results))
        }
        catch (e:any){
            dispatch(fetchingSearchError(e.messages))
        }
    }
}

export const getLanguage = (language:any)=> {
     return async (dispatch:AppDispatch)=> {
         dispatch(fetchingLanguage(language))
     }

}