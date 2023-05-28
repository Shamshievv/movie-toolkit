import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {getActors} from "../../store/Reducers/ActionCreators";
import user from "../../image/user.png"

const Actors = () => {
    const {actor,loader,error} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getActors(id))
    },[])
    console.log(actor)
    return (
        <div id="actors">
            <div className="container">
                <div className="actors">
                    {
                        actor.map((el)=>(
                            <div className="actors--card">
                                {
                                el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                    : <img className="actors--card__user" src={user} alt=""/>
                                }
                                <p>{el.original_name}</p>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Actors;