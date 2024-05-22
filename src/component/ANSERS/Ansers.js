import React from "react";
import "./Ansers.css";
//all logos imported
import ansers_log from "../Assets/ANSERS/logo_ansers.png";
import link_main from "../Assets/link_main.jpg";
import pdf_logo from "../Assets/pdf_logo.webp";
import document_logo from "../Assets/document_logo.png";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import static_youtube_logo from "../Assets/static_youtube_logo.png";
import document_main from "../Assets/doument_main.png";
import brochers_logo from "../Assets/brochers.png";

import ANSERS_BROCHERS from "../Assets/ANSERS/ansers_brochure.pdf";
import ANSERS_QA from "../Assets/ANSERS/ansers_qa.pdf";
const Ansers = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={ansers_log} alt="ansers_logo" />
      </div>
      <div className="datadiv">
        <div className="pdfFilesdiv">
          {/* <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={document_main} style={{ width: "25px" }} />
          </div> */}
          {/* <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna> */}
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={ANSERS_BROCHERS} download="ansers_brochers">
              <span className="colorAndFont">
                ANSERS brochure
                <img src={brochers_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={ANSERS_QA} download="ansers_qa">
              <span className="colorAndFont">
                ANSERS Q&A
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>
        </div>
        <div className="youtubeDiv">
          {/* <div style={{ marginTop: "-22px", marginLeft: "-20px" }}>
            <img
              src={static_youtube_logo}
              alt=""
              style={{
                width: "60px",
              }}
            />
          </div> */}
          {/* <spna style={{ fontWeight: "700", color: "red" }}>Videos</spna> */}
          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?v=Titc8XDynk4&t=2s"
              target="_black"
            >
              <span className="colorAndFont">
                ANSERS:Introduction{" "}
                <img src={youtube_logo} className="youtube-logo" />
              </span>
            </a>
          </div>
        </div>
        <div className="linkDiv">
          {/* <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={link_main} style={{ width: "25px" }} />
          </div> */}
          {/* <spna style={{ fontWeight: "700", color: "black" }}>Links</spna> */}
          <div style={{ borderLeft: "5px solid orange" }}>
            <div className="innerdivs">
              <a href="https://www.beta-cae.com/ansers.htm" target="_blank">
                <span className="colorAndFont">
                  ANSERS product site{" "}
                  <img src={link_logo} className="link-logo" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ansers;
