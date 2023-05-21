import React, { useState } from "react";
import "./App.css";
import Links from "./Links";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Nothing from "./Nothing";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

function App() {
  const [show, changeShow] = useState(false);
  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    console.log("dsdsdfd", lang);
    i18n.changeLanguage(lang);
  };

  let ch = () => {
    if (show === true) {
      changeShow(false);
    }
    if (show === false) {
      changeShow(true);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center", backgroundColor: "#f5cb87" }}>
        <table
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "#ffa13b",
          }}
        >
          <tr>
            <th>
              <Button
                style={{ width: "20%", height: "80%" }}
                variant="contained"
                onClick={() => handleClick("en")}
              >
                English
              </Button>
            </th>
            <th>
              <Button
                style={{ width: "20%", height: "80%" }}
                variant="contained"
                onClick={() => handleClick("hi")}
              >
                हिंदी
              </Button>
            </th>
            <th>
              <Button
                style={{ width: "20%", height: "80%" }}
                variant="contained"
                onClick={() => handleClick("guj")}
              >
                ગુજરાતી
              </Button>
            </th>
          </tr>
        </table>
        <button
          type="primary"
          style={{ width: "30%", height: "30%" }}
          onClick={ch}
        >
          <h3>
            {" "}
            {!show ? (
              <>
                <b>{i18n.t("IO")}</b>
              </>
            ) : (
              <>
                <b>{i18n.t("IC")}</b>
              </>
            )}
          </h3>
        </button>

        {show ? <Links /> : null}

        <Routes>
          <Route exact path="/" element={<Nothing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </h1>
    </>
  );
}

export default App;
