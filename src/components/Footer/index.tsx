import React from 'react';
import {Link} from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">

                    <div className="footer--title">
                        <Link to={"/popular"}>
                            Popular
                        </Link>
                        <Link to={"/topRated"}>
                            TopRated
                        </Link>
                        <Link to={"/"}>
                            Home
                        </Link>
                        <div className="footer--title__icons">
                            <Link to="">
                                <BsInstagram/>
                            </Link>
                            <Link to={""}>
                                <BsGithub/>
                            </Link>
                           <Link to={""}>
                               <BsLinkedin/>
                           </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;