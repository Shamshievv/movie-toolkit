import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (

        <div style={{
            textAlign:"center",
            width:"99%",
            height:"15%",
            background:"#181818",
            borderRadius:"10px",



        }}>
            <div style={{
                display:"flex",
                alignItems:'end',
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
                </NavLink> <NavLink style={{
                    color:"white",textDecoration:"none",
                    fontSize:"20px",
                    margin:"2.5% 20px"

                }} to={"/popular"}>
                     Popular
                </NavLink>
            </div>
        </div>

    );
};

export default Header;