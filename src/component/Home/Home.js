import React from "react";
import "./Home.css";
import white_paper from "../Assets/white_paper.jpg"
import brocher from "../Assets/brochers.png"
import ppt_logo from "../Assets/PowerPoint-to-PDF-Icon-5-1.png";
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

        <div
          style={{
            display: "flex",
            paddingTop: "0px",
          }}
        >
          <div className="legendsubdiv">
            <img
              src={white_paper}
              style={{ width: "15px", marginRight: "4px" }}
            />
          </div>
          <span className="legendtext" style={{ marginLeft: "6px" }}>
            White papers
          </span>
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: "0px",
          }}
        >
          <div className="legendsubdiv">
            <img src={ppt_logo} style={{ width: "23px", marginRight: "4px" }} />
          </div>
          <span className="legendtext" style={{ marginLeft: "13px" }}>
            Ppt to Pdf{" "}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: "0px",
          }}
        >
          <div className="legendsubdiv">
            <img src={brocher} style={{ width: "15px", marginRight: "4px" }} />
          </div>
          <span className="legendtext" style={{ marginLeft: "13px" }}>
            Brochers
          </span>
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
