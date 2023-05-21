import React from 'react';
import './App.css';
import contact from "./Contact.png";
import i18n from './i18next';

function App() {
  return (
   <>
   <h1 style={{ textAlign:"center", backgroundColor:"#f5d716" }}>
   <b>{i18n.t("CP")}</b><br/>
   <img
        alt="x"
         width={300}
         height={300}
         style={{backgroundColor:"#f5d716"}}
         src={contact} />
     </h1>
   </> );
}

export default App;
