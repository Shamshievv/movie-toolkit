import React, {useEffect} from 'react';
import {useAppSelector} from "../Hooks/useAppSelector";
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {getPopular} from "../store/Reducers/ActionCreators";
import MovieCard from "./MovieCard";

const Popular = () => {
    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getPopular())
    },[])
    console.log(movie)
    return (
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
        </div>
    );
};

export default Popular;