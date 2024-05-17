import React from 'react'
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";

const Ml = () => {
  return (
    <div className="common">
      <div className="imagediv">
        {/* <img src={ansers_log} alt="ansers_logo" /> */}
        <div>ML</div>
      </div>
     
      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">1.Machine Learning in KOMVOS</span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/embed/4NQksni1x1o?rel=0"
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

export default Ml