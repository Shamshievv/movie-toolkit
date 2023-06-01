import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {getLanguage} from "../../store/Reducers/ActionCreators";

const Header = () => {
    const [value,setValue] = useState("")
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const getSearch = () => {
        navigate(`/search/${value}`)
    }
    // useEffect(()=>{
    // dispatch(getSearch)
    // },[])
    const handleChange = (e:React.ChangeEvent<any>) => {
        dispatch(getLanguage(e.target.value))
    }
    return (
        <div id="header" style={{
            textAlign:"center",
            width:"99%",
            height:"15%",
            background:"#181818",
            borderRadius:"10px",
        }}>
            <div className="header" style={{
                display:"flex",
                alignItems:'center',
                justifyContent:"center",

            }}>
                <NavLink style={{
                    color:"white",textDecoration:"none",
                    fontSize:"20px",
                    margin:"2.5% 20px"

                }} to={"/"}>
                    Home
                </NavLink>
                <NavLink style={{
                    color:"white",textDecoration:"none",
                    fontSize:"20px",
                    margin:"2.5% 20px"

                }} to={"/topRated"}>
                    TopRated
                </NavLink>
                <NavLink style={{
                    color:"white",textDecoration:"none",
                    fontSize:"20px",
                    margin:"2.5% 20px"

                }} to={"/popular"}>
                     Popular
                </NavLink>
                <div className="header--nav">
                    <input onKeyDown={(e) => {
                        if (e.key === "Enter") getSearch()
                    }} onChange={(e) => setValue(e.target.value)} className="header--nav__search" style={{
                        border:"none",
                        outline:"none",
                        width:"150px",
                        height:"30px",
                        borderRadius:"10px",
                        background:"darkgray"
                    }} placeholder = " movie name" type="text"/>
                    <button onClick={() => getSearch() } style={{
                        margin:"0 10px",
                        background:"darkgray",
                        width:"50px",
                        height:"30px",
                        borderRadius:"10px",
                        border:"none"
                    }}>Add</button>
                    <select onChange={(e) => handleChange(e)}>
                        <option value="en-US">English</option>
                        <option value="ru-RU">Russian</option>
                    </select>
                </div>
            </div>
        </div>

    );
};

export default Header;