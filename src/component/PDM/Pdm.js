import React from 'react'

// import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdf_logo from "../Assets/pdf_logo.webp";
import white_paper from "../Assets/white_paper.jpg"
import beta_logo from "../Assets/beta_logo.png"
import ppt_logo from "../Assets/PowerPoint-to-PDF-Icon-5-1.png";
import STREAM_LINE_DATA_EXT_FROM_TC from "../Assets/PDM/Streamlining data extraction from.pdf"
import CAE_MODEL_GENERATION_PDM_AND_CAD from "../Assets/PDM/renault_cae_model_generation.pdf"
import ANSA_TC_SIM_WHITE_PAPER from "../Assets/PDM/ansa_tc_sim_white_paper.pdf"
import TEAMCENTRE_UTILITIES_PLUGIN from "../Assets/PDM/TeamcenterUtilities.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Pdm = () => {
   const handleDownload = (pdf) => {
     window.open(pdf, "_blank");
   };
  return (
    <div className="common">
      <div className="imagediv">
        <img
          src={beta_logo}
          alt="ansers_logo"
          style={{ width: "18px", height: "18px", paddingLeft: "80px" }}
        />
        <div
          style={{
            paddingLeft: "10px",
            marginTop: "-10px",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          PDM TO CAE
        </div>
      </div>

      <div className="datadiv">
        <div className="pdfFilesdiv">
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={CAE_MODEL_GENERATION_PDM_AND_CAD}
              onClick={() => handleDownload(CAE_MODEL_GENERATION_PDM_AND_CAD)}
              download="cae_model_generation_pdm_and_cad"
            >
              <span className="colorAndFont">
                RENAULT:CAE model generation from CAD & PDM{" "}
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={STREAM_LINE_DATA_EXT_FROM_TC}
              onClick={() => handleDownload(STREAM_LINE_DATA_EXT_FROM_TC)}
              download="stream_line_data_extraction_from_tc"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont" style={{ marginTop: "4px" }}>
                  Streamline data extraction from TC
                </div>
                <div>
                  <img src={ppt_logo} className="ppt-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={ANSA_TC_SIM_WHITE_PAPER}
              onClick={() => handleDownload(ANSA_TC_SIM_WHITE_PAPER)}
              download="ansa_tc_sim_white_paper"
            >
              <span className="colorAndFont">
                ANSA tc sim white papers
                <img src={white_paper} className="doc-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={TEAMCENTRE_UTILITIES_PLUGIN}
              onClick={() => handleDownload(TEAMCENTRE_UTILITIES_PLUGIN)}
              download="TeamcenterUtilities"
            >
              <span className="colorAndFont">
                Teamcentre utilities plugin{" "}
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdm