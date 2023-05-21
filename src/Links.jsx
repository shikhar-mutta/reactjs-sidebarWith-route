import React from "react";
import home from "./Home.png";
import contact from "./Contact.png";
import about from "./About.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
import i18n from "./i18next";

const Links = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "10%",
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: "#ffabcb",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "60px",
        }}
      >
        <table
          style={{
            padding: "2px",
            textAlign: "center",
            width: "100%",
            height: "40%",
            backgroundColor: "#ffabcb",
          }}
        >
          <tr>
            <th>
              <Link to="/home">
                <Button type="dashed">
                  <img
                    alt="x"
                    width={100}
                    height={100}
                    style={{ backgroundColor: "Highlight" }}
                    src={home}
                  />
                  <br />
                  <b>{i18n.t("Hb")}</b>
                </Button>
              </Link>
            </th>
          </tr>
          <tr>
            <th>
              <Link to="/about">
                <Button type="dashed">
                  <img
                    alt="x"
                    width={100}
                    height={100}
                    style={{ backgroundColor: "Highlight" }}
                    src={about}
                  />
                  <br />
                  <b>{i18n.t("Ab")}</b>
                </Button>
              </Link>
            </th>
          </tr>
          <tr>
            <th>
              <Link to="/contact">
                <Button type="dashed">
                  <img
                    alt="x"
                    width={100}
                    height={100}
                    style={{ backgroundColor: "Highlight" }}
                    src={contact}
                  />
                  <br />
                  <b>{i18n.t("Cb")}</b>
                </Button>
              </Link>
            </th>
          </tr>
          <tr>
            <th colSpan={3}>
              <Link to="/">
                <button type="primary" style={{ width: "100%", height: "20%" }}>
                  <h3>
                    {" "}
                    <b>{i18n.t("NT")}</b>
                  </h3>
                </button>
              </Link>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Links;
