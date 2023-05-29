import React, {useEffect,} from 'react';

import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {getActorMovie} from "../../store/Reducers/ActionCreators";
import {useParams} from "react-router-dom";


const ActorMovie = () => {
    const {movie, loader, error} = useAppSelector(state => state.ActorMovieSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getActorMovie(id))
    }, [])
    console.log(movie)


    return (

                <div className="movie">
                    {
                      movie.map((el)=>(
                          <div className="movie--actor">
                              <img className="movie--actor__image" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                              <p className="movie--actor__title">{el.title}</p>
                          </div>
                      ))
                    }
            </div>

    );
};

export default ActorMovie;