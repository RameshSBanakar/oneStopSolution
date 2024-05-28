// import React, { useState } from "react";
// import "./Navbar.css"; // Import your CSS file for styling

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">

//       <div className="navbar__container">

//         <div className="navbar__logo">One Stop Solution for All MRM</div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import white_paper from "../Assets/white_paper.jpg";
import brocher from "../Assets/brochers.png";
import ppt_logo from "../Assets/PowerPoint-to-PDF-Icon-5-1.png";
import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main">
      <div className="firstDiv">
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{
              backgroundColor: "greenyellow",
              marginTop: "3px",
              marginLeft: "27px",
            }}
          ></div>
          <span className="legendtext">Pdf</span>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "orange", marginTop: "3px" }}
          ></div>
          <span className="legendtext">Product site</span>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "orange", marginTop: "3px" }}
          ></div>
          <span className="legendtext">Product site</span>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "red", marginTop: "3px" }}
          ></div>
          <span className="legendtext">YouTube</span>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "blue", marginTop: "3px" }}
          ></div>
          <span className="legendtext">Confluence site</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "rgb(59, 240, 240)", marginTop: "3px" }}
          ></div>
          <span className="legendtext">Tutorials</span>
        </div>
      </div>
      <div className="secondDiv">One Stop Solution for All MRM</div>
      <div className="thirdDiv">
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "green", marginTop: "3px" }}
          ></div>
          <span className="legendtext">Documents</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "brown", marginTop: "3px" }}
          ></div>
          <div className="legendtext" style={{ marginTop: "0px" }}>
            Videos
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="legendsubdiv"
            style={{ backgroundColor: "rgb(221, 21, 154)", marginTop: "3px" }}
          ></div>
          <div className="legendtext" style={{ marginTop: "0px" }}>
            Events
          </div>
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
          <span
            className="legendtext"
            style={{ marginLeft: "6px", marginTop: "3px" }}
          >
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
          <span
            className="legendtext"
            style={{
              marginLeft: "13px",
              marginTop: "3px",
              marginRight: "18px",
            }}
          >
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
          <span
            className="legendtext"
            style={{
              marginLeft: "13px",
              marginRight: "10px",
              marginTop: "3px",
            }}
          >
            Brochure
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
