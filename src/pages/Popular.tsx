import React, {useEffect} from 'react';
import {useAppSelector} from "../Hooks/useAppSelector";
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {getPopular} from "../store/Reducers/ActionCreators";
import MovieCard from "./MovieCard";
import Page from "./nextPage/page";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

const Popular = () => {

    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getPopular(1))
    },[])
    console.log(movie)
    return (
       <div>
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
               <Page />
           </div>
       </div>
    );
};

export default Popular;