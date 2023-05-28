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
        <div>
            {
             <div style={{
                 background:`url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.backdrop_path}) no-repeat `,
                 boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)",
                 borderRadius:"10px",
                 margin:"10px 0",
             }} id="bg--details">
                <div className="bg--details__back" style={{

                }}>
                    <div className="bg--details__back--sub" >
                        <img style={{
                            margin:"20px 20px",
                            borderRadius:"10px"
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