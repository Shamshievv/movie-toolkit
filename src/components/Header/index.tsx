import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
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
                    <input className="header--nav__search" style={{
                        border:"none",
                        outline:"none",
                        width:"150px",
                        height:"30px",
                        borderRadius:"10px",
                        background:"darkgray"
                    }} placeholder = " movie name" type="text"/>
                    <button style={{
                        margin:"0 10px",
                        background:"darkgray",
                        width:"50px",
                        height:"30px",
                        borderRadius:"10px",
                        border:"none"
                    }}>Add</button>
                </div>
            </div>
        </div>

    );
};

export default Header;