import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {getDetails} from "../../store/Reducers/ActionCreators";
import {useParams} from "react-router-dom";

const Details = () => {
    const {detail, loader, error} = useAppSelector(state => state.detailSlice)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])
    console.log(detail)
    console.log(id)

    return (
        <div  style={{
            background:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) no-repeat `,
            boxShadow:"inset 100% 0 0 400px rgba(0,0,0,0.7)",
            borderRadius:"10px",
            margin:"1% 0"
        }} id="detail">
            {
             <div className="container">
                <div className="detail">
                    <div className="detail--title" >
                        <img style={{
                            margin:"1.5% 2%",
                            borderRadius:"10px",

                        }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""/>
                        <h1>{detail.title}</h1>
                    </div>
                </div>
             </div>
            }
        </div>
    );
};

export default Details;