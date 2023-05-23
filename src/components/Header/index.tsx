import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            textAlign:"center",
            width:"99%",
            height:"15%",
            background:"darkblue",
            position:"fixed",
            zIndex:"99",
            marginBottom:"30px",
            borderRadius:"20px"

        }}>
                <div style={{
                    display:"flex",
                    alignItems:'end',
                    justifyContent:"center",

                }}>
                    <NavLink style={{
                        color:"white",textDecoration:"none",
                        fontSize:"20px",
                        margin:"2.3% 20px"

                    }} to={"/popular"}>
                        Popular
                    </NavLink>
                    <NavLink style={{
                        color:"white",textDecoration:"none",
                        fontSize:"20px",
                        margin:"2.3% 20px"

                    }} to={"/topRated"}>
                        TopRated
                    </NavLink>
            </div>
        </div>
    );
};

export default Header;