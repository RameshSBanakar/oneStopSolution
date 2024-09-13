import React from 'react'



import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


// import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdf_logo from "../Assets/pdf_logo.webp";
import white_paper from "../Assets/white_paper.jpg"
import beta_logo from "../Assets/beta_logo.png"
import ppt_logo from "../Assets/ppt_to_pdf.png";
import STREAM_LINE_DATA_EXT_FROM_TC from "../Assets/PDM/Streamlining data extraction from.pdf"
import CAE_MODEL_GENERATION_PDM_AND_CAD from "../Assets/PDM/renault_cae_model_generation.pdf"
import ANSA_TC_SIM_WHITE_PAPER from "../Assets/PDM/ansa_tc_sim_white_paper.pdf"
import TEAMCENTRE_UTILITIES_PLUGIN from "../Assets/PDM/TeamcenterUtilities.pdf"
import CAD_DATA_TRANSLATOR from "../Assets/PDM/cad_data_translators.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Pdm = () => {
   const handleDownload = (pdf) => {
     window.open(pdf, "_blank");
   };
  return (
    <div className="common1">
      <a
        href="https://www.beta-cae.com/translators.htm"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="imagediv" id="my-button">
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
      </a>
      <ReactTooltip
        anchorId="my-button"
        content="CAD to ANSA Translators page"
      />
      <div className="datadiv">
        <div className="pdfFilesdiv" style={{ marginTop: "-10px" }}>
          <div className="innerdivs" id="eventsFilesMarginLeft">
            <a
              // href={CAE_MODEL_GENERATION_PDM_AND_CAD}
              onClick={() => handleDownload(CAE_MODEL_GENERATION_PDM_AND_CAD)}
              download="cae_model_generation_pdm_and_cad"
            >
              <span className="colorAndFont">
                RENAULT:CAE model generation from CAD & PDM{" "}
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="eventsFilesMarginLeft">
            <a
              // href={STREAM_LINE_DATA_EXT_FROM_TC}
              onClick={() => handleDownload(STREAM_LINE_DATA_EXT_FROM_TC)}
              download="stream_line_data_extraction_from_tc"
            >
              <div style={{ display: "flex" }}>
                <div
                  className="colorAndFont"
                  style={{
                    textAlign: "center",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                  }}
                >
                  Streamline data extraction from TC
                </div>
                <img
                  src={ppt_logo}
                  alt=""
                  className="ppt-logo"
                  style={{
                    width: "28px",
                    height: "13px",
                    margin: "1px",
                  }}
                />
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

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={TEAMCENTRE_UTILITIES_PLUGIN}
              onClick={() => handleDownload(CAD_DATA_TRANSLATOR)}
              download="TeamcenterUtilities"
            >
              <span className="colorAndFont">
                CAD to ANSA Translators
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