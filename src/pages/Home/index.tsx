import React from 'react';

import second from "../../image/second-tv.png"
import last from  "../../image/last-bg.png"
const Home = () => {
    return (
       <div style={{
           background:"black"
       }}>
           <div id="hero">
               <div className="container">
                   <div className="hero">
                       <div className="hero--title">
                           <h1>Фильмы, сериалы и многое другое без <br/> ограничений</h1>
                           <h2>Смотрите где угодно. Отменить подписку можно в любое время.</h2>
                           <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить <br/> подписку.</p>
                           <div className="hero--title__watch">
                               <input placeholder={"Your email address"} type="email"/>
                               <button>Start to watch</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div id="second">
              <div className="container">
                  <div className="second">
                     <div className="second--title">
                         <h3>Смотрите на <br/> телевизоре</h3>
                         <p>Смотрите на Smart TV, PlayStation, Xbox,<br/> Chromecast, Apple TV, плеерах Blu-ray и других <br/>устройствах.</p>
                     </div>
                      <div className="second--tv">
                          <img className="second--tv__image" src={second} alt="img"/>
                          <div className="second--tv__video">
                              <video  autoPlay playsInline muted loop>
                                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                              </video>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
           <div id="last">
               <div className="container">
                   <div className="last">
                       <div className="last--title">
                         <h3>Смотрите где угодно</h3>
                         <h5>Смотрите фильмы и сериалы на <br/> телефоне, планшете, ноутбуке и телевизоре.</h5>
                       </div>
                       <div className="last--tv">
                           <img className="last--tv__image" src={last} alt="img"/>
                           <div>
                               <video  className="last--tv__video" autoPlay playsInline muted loop>
                                   <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
                               </video>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

    );
};

export default Home;