import React from "react";
import "./Ansers.css";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import ansers_log from "../Assets/ANSERS/logo_ansers.png";
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import brochers_logo from "../Assets/brochers.png";
import ANSERS_BROCHERS from "../Assets/ANSERS/ansers_brochure.pdf";
import ANSERS_QA from "../Assets/ANSERS/ansers_qa.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Ansers = () => {
   const handleDownload = (pdf) => {
     window.open(pdf, "_blank");
   };
  return (
    <div className="common1">
      <div className="imagediv">
        <img src={ansers_log} alt="ansers_logo" />
      </div>
      <div className="datadiv">
        <div className="pdfFilesdiv" style={{ marginTop: "-10px" }}>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={ANSERS_BROCHERS}
              onClick={() => handleDownload(ANSERS_BROCHERS)}
              download="ansers_brochers"
            >
              <span className="colorAndFont">
                Brochure
                <img src={brochers_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={ANSERS_QA}
              onClick={() => handleDownload(ANSERS_QA)}
              download="ansers_qa"
            >
              <span className="colorAndFont">
                Question & Ansers
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="youtubeDiv">
          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?v=Titc8XDynk4&t=2s"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">Introduction </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="linkDiv">
          <div style={{ borderLeft: "5px solid orange" }}>
            <div className="innerdivs">
              <a href="https://www.beta-cae.com/ansers.htm" target="_blank">
                <span className="colorAndFont">
                  Product Website
                  <img src={link_logo} className="link-logo" alt="" />
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
