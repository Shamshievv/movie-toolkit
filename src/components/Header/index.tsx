import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <NavLink to={"/popular"}>
                        Popular
                    </NavLink>
                    <NavLink to={"/topRated"}>
                        TopRated
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;