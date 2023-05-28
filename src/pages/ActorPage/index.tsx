import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {getInfo} from "../../store/Reducers/ActionCreators";
import {IInformation} from "../../types/interfaces";

const InfoPage = () => {
    const [bio,setBio] = useState(300)
    const {info,loader,error} = useAppSelector(state => state.infoSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getInfo(id))
    },[])
    console.log(info)
    function handleBio (text:any){
        if (bio === 300){
            return setBio(text.length)
        }
        else {
            return setBio(300)
        }
    }
    return (
        <div id="info">
            <div className="container">
                <div className="info">

                        <div className="info--title">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${info.profile_path}`} alt=""/>
                            <p className="info--title__about" >
                               <span> Person information:</span> <br/>
                                 {info.known_for_department} <br/><br/>
                                <span>Birthday:</span><br/>
                                {info.birthday } ({info.birthday && 2023 - +info.birthday.slice(0,4)} years old) <br/> <br/>
                                <span>Place of birth :</span> <br/>
                                {info.place_of_birth} <br/><br/>
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
                                {info.biography && info.biography.slice(0,bio)}
                                <p className="info--nav__bio--all" onClick={() => handleBio(info.biography)}>{
                                    bio === 300 ? "All view " : "Close"
                                }</p>
                            </p>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default InfoPage;