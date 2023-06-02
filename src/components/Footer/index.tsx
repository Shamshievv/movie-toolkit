import React from 'react';
import {Link} from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
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
                          <div>
                              <p>Me at WebSites</p>
                              <Link className="footer--title__icons--insta" to="https://www.instagram.com/1llaza/">
                                  <BsInstagram/>
                              </Link>
                              <Link className="footer--title__icons--github" to={"https://www.github.com/shamshievv"}>
                                  <BsGithub/>
                              </Link>
                              <Link className="footer--title__icons--linkedin"  to={"https://www.linkedin.com/in/azamat-shamshiev-778224254/"}>
                                  <BsLinkedin/>
                              </Link>
                              <Link className="footer--title__icons--whatsapp"  to={"https://www.linkedin.com/in/azamat-shamshiev-778224254/"}>
                                  <BsWhatsapp/>
                              </Link>
                          </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;