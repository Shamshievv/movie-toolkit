import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {getDetails} from "../../store/Reducers/ActionCreators";
import {useParams} from "react-router-dom";
import Actors from "../ActorDetails";

const Details = () => {
    const {detail, loader, error} = useAppSelector(state => state.detailSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {language} = useAppSelector(state => state.ActorMovieSlice)

    useEffect(() => {
        dispatch(getDetails(id,language))
    }, [language])
    // console.log(detail)
    // console.log(id)

    return (
        <div style={{
            background:" linear-gradient(90deg, rgba(18,18,37,1) 16%, rgba(136,112,136,0.8016456582633054) 45%, rgba(24,12,19,1) 100%, rgba(68,42,48,0.7484243697478992) 100%)"
        }}>
        <div  style={{background:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) no-repeat `, boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)", borderRadius:"10px", margin:"1% 0"}} id="detail">
            {
             <div className="container">
                <div className="detail">
                    <div className="detail--title" >
                        <img className="detail--title__img" style={{
                            margin:"1.5% 2%",
                            borderRadius:"10px",
                        }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""/>

                        <div className="detail--nav">
                            <h1 className="detail--nav__name">{detail.title} <span>
                            ({detail.release_date && detail.release_date.slice(0,4)})
                        </span></h1>
                            <p style={{display:"flex"}} className="detail--nav__genres"><span style={{margin:"0 10px"}}>{detail.release_date}</span>  {detail.genres && detail.genres.map(el => "("  + el.name +  ")")} <li style={{marginLeft:"10px"}}>{detail.runtime && Math.floor(detail.runtime / 60)}h { detail.runtime && detail.runtime % 60}m</li></p>
                            <div className="detail--nav__cir">

                                <div className="detail--nav__cir--circle">
                                    <div className="detail--nav__cir--circle--border">
                                        <p>{detail.vote_average && Math.round(detail.vote_average * 10)}%</p>
                                    </div>
                                </div>
                                <p className="detail--nav__cir__top">Average</p>
                            </div>
                            <p className="detail--nav__say">{"«"  + detail.original_title +  "»"}</p>
                            <p className="detail--nav__overview">Overview : <br/> <br/>
                                {detail.overview === "0" ? "Нету данных" : detail.overview}
                            </p>
                        </div>

                    </div>
                </div>
             </div>

            }
        </div>
            <p style={{
                color:"black",
                fontFamily:"Source Code Pro",
                fontSize:"30px",
                fontWeight:"800"
            }}>Actors :</p>
            <Actors/>

        </div>
    );
};

export default Details;