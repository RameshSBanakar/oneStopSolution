import React from "react";
import "./Home.css";

import Mrm from "../MRM/Mrm";
import Mrm2 from "../MRM/Mrm2";
import Spdrm from "../SPDRM/Spdrm";
import Ansers from "../ANSERS/Ansers";
import Komvos from "../KOMVOS/Komvos";
import Pdm from "../PDM/Pdm";
import Ml from "../ML/Ml";
const Home = () => {
  return (
    <>
      <div className="legendDiv">
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "greenyellow" }}
          ></div>
          <span className="legendtext">Pdf</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "orange" }}
          ></div>
          <span className="legendtext">Product site</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "red" }}
          ></div>
          <span className="legendtext">YouTube</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "blue" }}
          ></div>
          <span className="legendtext">Confluence site</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "rgb(59, 240, 240)" }}
          ></div>
          <span className="legendtext">Tutorials</span>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "green" }}
          ></div>
          <span className="legendtext">Documents</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "brown" }}
          ></div>
          <span className="legendtext">Videos</span>
        </div>
      </div>
      <div className="home">
        <div className="firstROw">
          {" "}
          <Mrm />
          {/* <Conference/> */}
        </div>
        <div className="firstROw">
          {" "}
          <Mrm2 />
          <Ml />
        </div>
        <div className="firstROw">
          {" "}
          <Ansers />
          <Komvos />
        </div>
        <div className="firstROw">
          <Spdrm />

          <Pdm />
        </div>
      </div>
    </>
  );
};

export default Home;
