import React from "react";
import "./Komvos.css";
// import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import komvos_logo from "../Assets/KOMVOS/logo_cropped_komvos.png";
import pdf_logo from "../Assets/pdf_logo.webp";
import document_logo from "../Assets/document_logo.png";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import brochers_logo from "../Assets/brochers.png";
import ppt_logo from "../Assets/PowerPoint-to-PDF-Icon-5-1.png";
import KOMVOS_INTRODUCTIOn_PDF from "../Assets/KOMVOS/20231016_introduction_to_KOMVOS.pdf";
import KOMVOS_UI_WALKTHROUGH from "../Assets/KOMVOS/20220700_KOMVOS_UI_walkthrough.pdf";
import KOMVOS_USERGUIDE from "../Assets/KOMVOS/KOMVOS_User_Guide.pdf";
import KOMVOS_BROCHER from "../Assets/KOMVOS/komvos_brochure.pdf";
import KOMVOS_SYSTEM_REQUIREMENT from "../Assets/KOMVOS/system_requirements.pdf";
import KMOVOS_EXPLAIND from "../Assets/KOMVOS/komvos_explained.pdf";
import KOMVOS_QA from "../Assets/KOMVOS/komvos_qa.pdf";
import KOMVOS_SHORT_NOTES from "../Assets/KOMVOS/KOMVOS_shortened.docx";
import REINTRO_KOMVOS_AS_DESKTOP_CLIENT from "../Assets/KOMVOS/reintroduce KOMVOS as a simulation data and process managemenet desktop client.pdf";
import MODELBUILD_SIMPLIFIED from "../Assets/KOMVOS/model_build_simplified.pdf";
import MACHINE_LEARNING from "../Assets/KOMVOS/Machine_Learning.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Komvos = () => {
   const handleDownload = (pdf) => {
     window.open(pdf, "_blank");
   };
  return (
    <div className="common">
      <a href="https://www.beta-cae.com/komvos.htm" target="_blank">
        {" "}
        <div className="imagediv">
          <img src={komvos_logo} />
        </div>
      </a>

      <div className="datadiv">
        <div className="pdfFilesdiv" style={{ marginTop: "-10px" }}>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KOMVOS_INTRODUCTIOn_PDF}
              onClick={() => handleDownload(KOMVOS_INTRODUCTIOn_PDF)}
              download="introduction_to_komvos"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont" style={{ marginTop: "6px" }}>
                  Introduction{" "}
                </div>
                <div>
                  <img src={ppt_logo} className="ppt-logo" alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KOMVOS_UI_WALKTHROUGH}
              onClick={() => handleDownload(KOMVOS_UI_WALKTHROUGH)}
              download="komvos_ui_walkthrough"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont" style={{ marginTop: "6px" }}>
                  UI Walkthrough{" "}
                </div>
                <div>
                  {" "}
                  <img src={ppt_logo} className="ppt-logo" alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KOMVOS_USERGUIDE}
              onClick={() => handleDownload(KOMVOS_USERGUIDE)}
              download="komvos_userguide"
            >
              <span className="colorAndFont">
                User Guide <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KOMVOS_BROCHER}
              onClick={() => handleDownload(KOMVOS_BROCHER)}
              download="komvos_brochers"
            >
              <span className="colorAndFont">
                Brochure <img src={brochers_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KOMVOS_SYSTEM_REQUIREMENT}
              onClick={() => handleDownload(KOMVOS_SYSTEM_REQUIREMENT)}
              download="komvos_system_requirement"
            >
              <span className="colorAndFont">
                System requirements for Installation{" "}
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KMOVOS_EXPLAIND}
              onClick={() => handleDownload(KMOVOS_EXPLAIND)}
              download="komvos_explained"
            >
              <span className="colorAndFont">
                KOMVOS explained{" "}
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={KOMVOS_QA}
              onClick={() => handleDownload(KOMVOS_QA)}
              download="komvos_qa"
            >
              <span className="colorAndFont">
                Question & Answers
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              // href={REINTRO_KOMVOS_AS_DESKTOP_CLIENT}
              onClick={() => handleDownload(REINTRO_KOMVOS_AS_DESKTOP_CLIENT)}
              download="reintroduce KOMVOS as a simulation data and process managemenet desktop client"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">
                  Re-intro to the KOMVOS as desktop client
                </div>
                <div>
                  <img src={ppt_logo} className="ppt-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="docFilesMarginLeft">
            <a
              // href={KOMVOS_SHORT_NOTES}
              onClick={() => handleDownload(KOMVOS_SHORT_NOTES)}
              download="komvos_short_notes"
            >
              <span className="colorAndFont">
                Short Notes
                <img src={document_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="totirial">
          {/* <span style={{ fontWeight: "700", color: " rgb(59, 240, 240)" }}>
            Tutorials
          </span> */}
          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              // href={MODELBUILD_SIMPLIFIED}
              onClick={() => handleDownload(MODELBUILD_SIMPLIFIED)}
              download="model_build_simplified"
            >
              <span className="colorAndFont">
                Model build simplified
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              // href={MACHINE_LEARNING}
              onClick={() => handleDownload(MACHINE_LEARNING)}
              download="Machine_Learning"
            >
              <span className="colorAndFont">
                Machine Learning in KOMVOS
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="youtubeDiv">
          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/embed/mq4HrOafuO0?rel=0"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">
                  KOMVOS - The innovative SDM platform{" "}
                </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUd96uYCP7pV_ekfM6JPvCvu"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">KOMVOS Tutorials</div>
                <div>
                  {" "}
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/embed/4NQksni1x1o?rel=0"
              target="_black"
            >
              <div style={{ display: "flex" }}>
                <div className="colorAndFont">Machine Learning in KOMVOS </div>
                <div>
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="linkDiv">
          <div className="innerdivs" id="productFilesMarginLeft">
            <a href="https://www.beta-cae.com/komvos.htm" target="_blank">
              <span className="colorAndFont">
                Product Website
                <img src={link_logo} className="link-logo" alt="" />
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Komvos;
