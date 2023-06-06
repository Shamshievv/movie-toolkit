import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {getSearchMovie} from "../../store/Reducers/ActionCreators";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import MovieCard from "../../pages/MovieCard";
import Header, {err} from "../Header";

const Search = () => {
    const {search} = useAppSelector(state => state.SearchSlice)
    const dispatch = useAppDispatch()
    const {movieName} =  useParams()
    useEffect(()=>{
       dispatch(getSearchMovie(movieName))
    },[search])
    return (
        <div style={{
            display:'flex',
            alignItems:"center",
            flexWrap:"wrap"
        }}>
            {
                search.map(el =>(
                    <div style={{
                        margin:"0 10px"
                    }} >
                        <MovieCard el={el}/>

                    </div>
                ))
            }
        </div>
    );
};

export default Search;