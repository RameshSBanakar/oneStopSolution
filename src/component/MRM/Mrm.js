import React, {useState } from "react";
import "./Mrm.css";
// import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdf_logo from "../Assets/pdf_logo.webp";

import youtube_logo from "../Assets/youtube_logo.png";
import document_logo from "../Assets/document_logo.png";
import beta_logo from "../Assets/beta_logo.png";
import white_paper from "../Assets/white_paper.jpg"
import brochers_logo from "../Assets/brochers.png"
import ppt_logo from "../Assets/ppt_to_pdf.png";
import cross_icon from "../Assets/cross_icon.png";

import MRM_PDF from "../Assets/MRM/Modular_Model_and_Run_Management.pdf";
import DATA_MANAGMENT from "../Assets/MRM/1data_management.pdf";
import INTRODUCTION_TO_MRM from "../Assets/MRM/Intorduction_to_Modular_Model_and_Run_management.pdf";

import DATA_MANAGMENT_BROCHER from "../Assets/MRM/data_management_brochure.pdf";
import DIFFRENCE_BTW_FBDM_SBDM from "../Assets/MRM/Difference_FBDM_ServerBasedDM.docx";
import MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING from "../Assets/MRM/multivariant_multidiscipline_ansa_modeling.pdf";
import MODULAR_RUN_MANGMENT_2 from "../Assets/MRM/modular_run_management.pdf";
import SIMMANAGER_BETA_SUITE_INTRACTION from "../Assets/MRM/simmanager-beta_suite-interaction.pdf";
import MODEL_COMPARISION_IN_ANSA_META from "../Assets/MRM/ansa_model_comparison.pdf";
import FROM_INCLUDE_TO_MODEL_BROWSER from "../Assets/MRM/FromIncludesToModelBrowserContainers.pdf"
import PART_BUILD from "../Assets/MRM/part_build.pdf"
import ASSEMBLY_VIDEO from "../Assets/MRM/AssemblySet.mp4"
import BUILD_FASTENER_LIBRARY from "../Assets/MRM/BuildFastenersLibrary.pdf"
import AUTOMATIC_RECOG_FASTENER from "../Assets/MRM/fastener_library.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Mrm = () => {
 
   const [videoCard, setVideoCard] = useState({
     state: false,
     link: "",
     videoName: "",
   });
   const setVideocardValues = (prop) => {
     setVideoCard(prop);
     window.scrollTo({ top: 0, behavior: "smooth" });
   };
   const handleDownload = (pdf) => {
     window.open(pdf, "_blank");
   };
  return (
    <div>
      {videoCard.state && (
        <div className="video-card">
          <div className="videoheading">
            <div>
              <b className="videoname">{videoCard.videoName}</b>
            </div>
            <div>
              <img
                src={cross_icon}
                className="crossIcon"
                onClick={() =>
                  setVideocardValues({ state: false, link: "", videoName: "" })
                }
              />
            </div>
          </div>

          <div className="video-container">
            <video width="480" height="400" controls className="videotagstyle">
              <source src={videoCard.link} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
      <div className="common">
        <a
          href="https://www.beta-cae.com/ansa.htm"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="imagediv">
            <img
              src={beta_logo}
              alt="beta_logo"
              style={{ width: "18px", height: "18px", paddingLeft: "80px" }}
            />
            <div
              style={{
                paddingLeft: "30px",
                marginTop: "-10px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              MRM
            </div>
          </div>
        </a>

        <div className="datadiv">
          <div className="pdfFilesdiv" style={{ marginTop: "-10px" }}>
            <div className="innerdivs " id="pdfFilesMarginLeft">
              <a
                // href={INTRODUCTION_TO_MRM}
                onClick={() => handleDownload(INTRODUCTION_TO_MRM)}
                download="MRM_for_handling_complex_models"
              >
                <div style={{ display: "flex" }}>
                  <div
                    className="colorAndFont"
                    style={{ alignContent: "center" }}
                  >
                    MRM for handling complex models
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

            <div
              className="innerdivs pdfFilesMarginLeft"
              id="pdfFilesMarginLeft"
            >
              <a
                // href={MRM_PDF}
                onClick={() => handleDownload(MRM_PDF)}
                download="Modular_Model_and_Run_Management"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Modular Model and Run Managment
                  </div>
                  <div>
                    <img src={pdf_logo} className="pdf-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={DATA_MANAGMENT}
                onClick={() => handleDownload(DATA_MANAGMENT)}
                download="Data_management"
              >
                <span className="colorAndFont">
                  Data Management
                  <img src={pdf_logo} className="pdf-logo" alt="" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={DATA_MANAGMENT_BROCHER}
                onClick={() => handleDownload(DATA_MANAGMENT_BROCHER)}
                download="Data_managment_brochure"
              >
                <span className="colorAndFont">
                  Data Management brochure
                  <img src={brochers_logo} className="doc-logo" alt="" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING}
                onClick={() =>
                  handleDownload(MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING)
                }
                download="multivariant_multidiscipline_ansa_modeling"
              >
                <span className="colorAndFont">
                  Multidiscipline ANSA modeling
                  <img src={white_paper} className="doc-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODULAR_RUN_MANGMENT_2}
                onClick={() => handleDownload(MODULAR_RUN_MANGMENT_2)}
                download="modular_run_management"
              >
                <span className="colorAndFont">
                  Modular run management
                  <img src={white_paper} className="doc-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={SIMMANAGER_BETA_SUITE_INTRACTION}
                onClick={() => handleDownload(SIMMANAGER_BETA_SUITE_INTRACTION)}
                download="simmanager-beta_suite-interaction"
              >
                <span className="colorAndFont">
                  Simmanager-beta_suite-interaction
                  <img src={white_paper} className="doc-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(MODEL_COMPARISION_IN_ANSA_META)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  Model comparison in ANSA & META
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="docFilesMarginLeft">
              <a
                // href={DIFFRENCE_BTW_FBDM_SBDM}
                onClick={() => handleDownload(DIFFRENCE_BTW_FBDM_SBDM)}
                download="diffrence_btw_FBDM_SBDM"
              >
                <span className="colorAndFont">
                  Difference between FBDM & SBDM
                  <img src={document_logo} className="doc-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(BUILD_FASTENER_LIBRARY)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  Build Fasteners Library
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(AUTOMATIC_RECOG_FASTENER)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  Automatic Recognition of Fasteners
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
                </span>
              </a>
            </div>
          </div>
          <div className="youtubeDiv">
            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=F6XmKCHOj_M"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Model assembly and iterations management
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Modular Run Management in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=9nSnRavh_Fc"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Model Assembly to Loadcase Set-up
                  </div>
                  <div>
                    {" "}
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=67lnE2tJLes"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Simulation Process_Data Management at CEVT
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://youtu.be/F6XmKCHOj_M?si=NGxlxknJNhXZ26XG"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    latest development for sim model assembly
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="totirial">
            {/* <span style={{ fontWeight: "700", color: "red" }}>
              MRM Playlist
            </span> */}

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=f2q2BPy9zw4&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=1"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Elevated Includes Management
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=NVcDgnDtxnM&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=2"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Model Validation and Verification in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=ETYY07pNv90&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=3"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Key features of modular Model Assembly in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=ASU_YbaPZ9Q&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=4"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    How to assemble modular models in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=ASU_YbaPZ9Q&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=4"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    How to assemble modular models in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=-dnn9ImZfMc&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=5"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Introduction to Loadcase setup in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=GFStod6LtxI&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=6"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Regular Loadcases setup in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=0ezvZvJN_vk&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=7"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Loadcase Header Loadcases setup in ANSA
                  </div>
                  <div>
                    <img src={youtube_logo} className="youtube-logo" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div className="innerdivs" id="youtubeFilesMarginLeft">
              <a
                href="https://www.youtube.com/watch?v=A4oFIwxfBwU&list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ&index=8"
                target="_black"
              >
                <div style={{ display: "flex" }}>
                  <div className="colorAndFont">
                    Target Points Loadcases setup in ANSA
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
    </div>

    // </div>
    // </div>
  );
};

export default Mrm;
