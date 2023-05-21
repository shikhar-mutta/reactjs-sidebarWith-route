import React from 'react';
import './App.css';
import i18n from './i18next';

import home from "./Home.png";

function Home() {
  return (
   <>
    <h1 style={{ textAlign:"center", backgroundColor:"#59ff85" }}>
   <b>{i18n.t("HP")}</b><br/>
    <img
        alt="x"
         width={300}
         height={300}
         style={{backgroundColor:"#59ff85" }}
         src={home} />
     </h1>
   </> );
}

export default Home;
