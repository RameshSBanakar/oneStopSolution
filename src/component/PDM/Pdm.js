import React from 'react'
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
const Pdm = () => {
  return (
    <div className="common">
      <div className="imagediv">
        {/* <img src={ansers_log} alt="ansers_logo" /> */}
        <div>PDM</div>
      </div>
     
      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              1.simulation model assembly and management of iterations
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=F6XmKCHOj_M"
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

export default Pdm