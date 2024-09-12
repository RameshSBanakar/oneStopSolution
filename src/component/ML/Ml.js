import React from "react";
// import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdf_logo from "../Assets/pdf_logo.webp";
import white_paper from "../Assets/white_paper.jpg";

import youtube_logo from "../Assets/youtube_logo.png";
import OCCUPANT_SAFETY_PREDICTION from "../Assets/ML/occupant_safety_prediction.pdf"
import beta_logo from "../Assets/beta_logo.png";
import ML_FASTNER from "../Assets/ML/ML_fasteners.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Ml = () => {
   const handleDownload = (pdf) => {
     window.open(pdf, "_blank");
   };
  return (
    <div className="common1">
      <div className="imagediv">
        <img
          src={beta_logo}
          alt="ansers_logo"
          style={{ width: "18px", height: "18px", paddingLeft: "80px" }}
        />
        <div
          style={{
            paddingLeft: "40px",
            marginTop: "-15px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          ML
        </div>
      </div>

      <div className="datadiv">
        <div className="pdfFilesdiv" style={{ marginTop: "-10px" }}>
          {/* <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={document_main} style={{ width: "25px" }} />
          </div> */}
          {/* <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna> */}
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={ML_FASTNER}
              onClick={() => handleDownload(ML_FASTNER)}
              download="ML_fasteners"
            >
              <span className="colorAndFont">
                Embedded clips recognition by ML
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={ML_FASTNER}
              onClick={() => handleDownload(OCCUPANT_SAFETY_PREDICTION)}
              download="ML_fasteners"
            >
              <span className="colorAndFont">
                Occupant Safety Prediction{" "}
                <img src={white_paper} className="doc-logo" />
              </span>
            </a>
          </div>
        </div>
        <div className="youtubeDiv">
          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?app=desktop&v=46cnjoS9zNM"
              target="_black"
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div className="colorAndFont">
                  ML in feature detection for meshing
                </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?v=0JnzxLrmgLQ"
              target="_black"
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div className="colorAndFont">
                  Training dataset and perform ML and Design{" "}
                </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?v=CbyqwVCM3xM"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">ML in Feature Detection </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?app=desktop&v=WshD4GT6ycc"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">
                  Model Parameterization in ANSA
                </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?app=desktop&v=_OBhv8WXFqc"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">
                  SEAT:optimize design of car-body-structure by ML{" "}
                </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ml;
