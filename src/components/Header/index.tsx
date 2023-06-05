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
    // },[])
    const handleChange = (e:React.ChangeEvent<any>) => {
        dispatch(getLanguage(e.target.value))

    }
    return (
        <div id="header" style={{
            width:"100%",
            height:"15%",
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
                    margin:"2.5% 20px",
                    fontFamily:"Poor Richard,san-serif",
                    fontWeight:"500"

                }} to={"/"}>
                    Home
                </NavLink>
                <NavLink style={{
                    color:"white",textDecoration:"none",
                    fontSize:"20px",
                    margin:"2.5% 20px",
                    fontFamily:"Poor Richard,san-serif",
                    fontWeight:"500"

                }} to={"/topRated"}>
                    TopRated
                </NavLink>
                <NavLink style={{
                    color:"white",textDecoration:"none",
                    fontSize:"20px",
                    margin:"2.5% 20px",
                    fontFamily:"Poor Richard,san-serif",
                    fontWeight:"500"

                }} to={"/popular"}>
                     Popular
                </NavLink>
                <div className="header--nav">
                    <input onKeyDown={(e) => {
                        if (e.key === "Enter") getSearch()
                    }} onChange={(e) => setValue(e.target.value)} className="header--nav__search" style={{
                        border:"2px solid red",
                        outline:"none",
                        width:"150px",
                        height:"30px",
                        borderRadius:"10px",
                        background:"0",
                        color:"wheat"
                    }} placeholder = " movie name" type="text"/>
                    <button onClick={() => getSearch() } style={{
                        margin:"0 10px",
                        background:"0",
                        width:"50px",
                        height:"30px",
                        borderRadius:"10px",
                        border:"2px solid red",
                        fontFamily:"Poor Richard,san-serif",
                        fontWeight:"500",
                        fontSize:"15px",
                        color:"white"
                    }}>Watch</button>
                    <select style={{

                        background:"0",
                        color:"white",
                        borderRadius:"10px",
                        width:"90px",
                        height:"30px",
                        outline:"none",
                        border:"2px solid red"
                    }} onChange={(e) => handleChange(e)}>
                        <option style={{
                            background:"0",
                            color:"black",
                            fontWeight:"800"
                        }} value="en-US">English</option>
                        <option  style={{
                            background:"0",
                            color:"black",
                            fontWeight:"800"
                        }}  value="ru-RU">Russian</option>
                    </select>
                </div>
            </div>
        </div>

    );
};

export default Header;