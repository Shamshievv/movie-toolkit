import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {getInfo} from "../../store/Reducers/ActionCreators";
import ActorMovie from "../ActorMovie";

import akti from "../../image/akti.jpg"
const InfoPage = () => {
    const [bio,setBio] = useState(500)
    const {info,loader,error} = useAppSelector(state => state.infoSlice)
    const dispatch = useAppDispatch()
    const {movie} = useAppSelector(state => state.movieSlice)
    const {id} = useParams()
    const {language} = useAppSelector(state => state.ActorMovieSlice)

    useEffect(()=>{
        dispatch(getInfo(id))

    },[])

    console.log(info)
    function handleBio (text:any) {
        if (bio === 500) {
            return setBio(text.length)
        }
        else {
            return setBio(500)
        }
    }

    return (
        <div id="info">
            <div className="container">
                <div className="info">
                        <div className="info--title">
                            {
                             info.profile_path ?   <img className="info--title__actor" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${info.profile_path}`} alt=""/>
                                : <img width={250} height={300} src={akti} alt=""/>
                            }


                            <p className="info--title__about" >
                               <span> Person information:</span> <br/>
                                 {info.known_for_department} <br/><br/>
                                <span>Birthday:</span><br/>
                                {info.birthday === null ? "2004-29-11": info.birthday } ({info.birthday === null ? "19" :info.birthday && 2023 - +info.birthday.slice(0,4)} years old) <br/> <br/>
                                <span>Place of birth :</span> <br/>
                                {info.place_of_birth === null ? "Batken" :info.place_of_birth} <br/><br/>
                                <span>also_known_as:</span> <br/>
                               <span> {info.also_known_as && info.also_known_as}</span> <br/><br/>
                                <span>Gender:</span> <br/>
                                {info.gender === 1 ? "Woman" : "Man" }

                            </p>

                        </div>
                        <div className="info--nav">
                            <h3>{info.name}</h3>
                            <p className="info--nav__bio">
                                <span>Biography:</span> <br/> <br/>
                                { info.biography === "" ? "Актилек является другом нашего главного программиста Азамата,оба друзья входят топ -4 самых богатых людей в мире,кроме этого у них имеется четверо жен" :info.biography && info.biography.slice(0,bio) }
                                <p className="info--nav__bio--all" onClick={() => handleBio(info.biography)}>{
                                    bio === 0 ? "All view" : "All view" &&  bio === 500 ? "All view " : "Close"
                                }</p>
                            </p>
                          <ActorMovie/>
                        </div>
                </div>
            </div>
        </div>
    );
};
export default InfoPage;