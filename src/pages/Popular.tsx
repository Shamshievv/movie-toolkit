import React, {useEffect} from 'react';
import {useAppSelector} from "../Hooks/useAppSelector";
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {getPopular} from "../store/Reducers/ActionCreators";
import MovieCard from "./MovieCard";
import Page from "./nextPage/page";

const Popular = () => {
    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    const {language} = useAppSelector(state => state.ActorMovieSlice)

    console.log(movie)
    return (
       <div id="popular">
           <div className="container">
               <div style={{
                   display:"flex",
                   alignItems:"center",
                   justifyContent:"space-between",
                   flexWrap:"wrap"
               }} className="flex flex-wrap">
                   {
                       movie.map((el) => <MovieCard el={el}/>)
                   }
               </div>
               <Page/>
           </div>
       </div>
    );
};

export default Popular;