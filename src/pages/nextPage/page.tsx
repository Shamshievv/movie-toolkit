import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {getPopular} from "../../store/Reducers/ActionCreators";

const Page = () => {
    const [page,setPage] = useState(1)
    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getPopular(page))
        setPage(page)
    },[page])
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <button style={{
                width:"100px",
                height:"30px",
                background:"black",
                border:"none",
                cursor:"pointer",
                margin:"0 20px",
                color:"wheat",
                fontSize:"20px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }} onClick={() => setPage(page + 1)}>+</button>
            <button  style={{
                width:"100px",
                height:"30px",
                background:"black",
                border:"none",
                cursor:"pointer",
                margin:"0 20px",
                color:"wheat",
                fontSize:"20px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }} onClick={() => setPage(page - 1)}>-</button>
        </div>
    );
};

export default Page;