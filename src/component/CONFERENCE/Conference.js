import React from 'react'
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
const Conference = () => {
  return (
    <div className="common">
      <div className="imagediv">
        {/* <img src={ansers_log} alt="ansers_logo" /> */}
        <div style={{ paddingLeft: "15px" }}>CONFERENCE</div>
      </div>

      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              9th BEFORE REALITY Conference
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUe3PfpbgPHYCZP08b2t-PAk"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference