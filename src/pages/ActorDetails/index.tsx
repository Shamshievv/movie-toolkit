import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {Link, useParams} from "react-router-dom";
import {getActors} from "../../store/Reducers/ActionCreators";
import user from "../../image/user.png"
import {CircularProgress} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import akti from "../../image/akti.jpg"
import mom from "../../image/mom.jpg"
const Actors = () => {
    const {actor,loader,error} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {language} = useAppSelector(state => state.ActorMovieSlice)
    useEffect(()=>{
        dispatch(getActors(id))
    },[])
    // console.log(actor)

    return (
        <div id="actors">
            <div className="container">
                <div className="actors">
                    {
                        actor.map((el)=>(
                            <Link to={`/actors/${el.id}`} className="actors--card">
                                {
                                el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${ el.profile_path}`} alt=""/>
                                    : <img className="actors--card__user" src={mom} alt=""/>

                                }
                                <p className="actors--card__name">{el.original_name}</p>
                                <p className="actors--card__role" >{el.character}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Actors;