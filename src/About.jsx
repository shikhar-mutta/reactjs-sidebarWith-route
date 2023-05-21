import React from "react";
import "./App.css";
import about from "./About.png";
import i18n from "./i18next";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", backgroundColor: "#ed535b" }}>
        <b>{i18n.t("AP")}</b>
        <br />
        <img
          alt="x"
          width={300}
          height={300}
          style={{ backgroundColor: "#ed535b" }}
          src={about}
        />
      </h1>
    </>
  );
}

export default App;
