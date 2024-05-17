import React from 'react'
import "./Ansers.css"
//all logos imported
import ansers_log from "../Assets/ANSERS/logo_ansers.png"

import pdf_logo from "../Assets/pdf_logo.webp"
import document_logo from "../Assets/document_logo.png"
import link_logo from "../Assets/link_logo.jpg"
import youtube_logo from "../Assets/youtube_logo.png"


import ANSERS_BROCHERS from "../Assets/ANSERS/ansers_brochure.pdf";
import ANSERS_QA from "../Assets/ANSERS/ansers_qa.pdf";
const Ansers = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={ansers_log} alt="ansers_logo" />
      </div>
      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              1.ANSERS: The single point-of-truth for simulation and physical
              test data
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=Titc8XDynk4&t=2s"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">2.Ansers brochure</span>
          </div>
          <div>
            <a href={ANSERS_BROCHERS} download="ansers_brochers">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">3.Ansers Q&A</span>
          </div>
          <div>
            <a href={ANSERS_QA} download="ansers_qa">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">4.ANSERS product site</span>
          </div>
          <div>
            <a href="https://www.beta-cae.com/ansers.htm" target="_blank">
              <img src={link_logo} className="link-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ansers