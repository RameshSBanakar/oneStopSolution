import React from "react";
import "./Mrm.css";

import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import document_logo from "../Assets/document_logo.png";
import beta_logo from "../Assets/beta_logo.png";

import white_paper from "../Assets/white_paper.jpg"
import brochers_logo from "../Assets/brochers.png"
import ppt_logo from "../Assets/ppt_logo.png"


import MRM_PDF from "../Assets/MRM/Modular_Model_and_Run_Management.pdf";
import DATA_MANAGMENT from "../Assets/MRM/1data_management.pdf";
import INTRODUCTION_TO_MRM from "../Assets/MRM/Intorduction_to_Modular_Model_and_Run_management.pdf";

import DATA_MANAGMENT_BROCHER from "../Assets/MRM/data_management_brochure.pdf";
import DIFFRENCE_BTW_FBDM_SBDM from "../Assets/MRM/Difference_FBDM_ServerBasedDM.docx";
import MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING from "../Assets/MRM/multivariant_multidiscipline_ansa_modeling.pdf";
import MODULAR_RUN_MANGMENT_2 from "../Assets/MRM/modular_run_management.pdf";
import SIMMANAGER_BETA_SUITE_INTRACTION from "../Assets/MRM/simmanager-beta_suite-interaction.pdf";
import MODEL_COMPARISION_IN_ANSA_META from "../Assets/MRM/ansa_model_comparison.pdf";

const Mrm = () => {
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
            paddingLeft: "30px",
            marginTop: "-10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          MRM
        </div>
      </div>

      <div className="datadiv">
        <div className="pdfFilesdiv">
          <div
            className="innerdivs "
            id="pdfFilesMarginLeft"
            // style={{ borderLeft: "4px solid greenyellow" }}
          >
            <a
              href={INTRODUCTION_TO_MRM}
              download="Introduction_to_Modular_Model_and_Run_management"
            >
              <span className="colorAndFont">
                MRM for handling the complex models
                <img src={ppt_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>

          <div
            className="innerdivs pdfFilesMarginLeft"
            id="pdfFilesMarginLeft"
            // style={{ borderLeft: "4px solid greenyellow" }}
          >
            <a href={MRM_PDF} download="Modular_Model_and_Run_Management">
              <span className="colorAndFont">
                Modular Model and Run Managment
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={DATA_MANAGMENT} download="Data_managment">
              <span className="colorAndFont">
                Data Managment{" "}
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={DATA_MANAGMENT_BROCHER} download="Data_managment_brochure">
              <span className="colorAndFont">
                Data Management brochure{" "}
                <img src={brochers_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING}
              download="multivariant_multidiscipline_ansa_modeling"
            >
              <span className="colorAndFont">
                Multidiscipline ansa modeling{" "}
                <img src={white_paper} className="doc-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={MODULAR_RUN_MANGMENT_2} download="modular_run_management">
              <span className="colorAndFont">
                Modular run management
                <img src={white_paper} className="doc-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={SIMMANAGER_BETA_SUITE_INTRACTION}
              download="simmanager-beta_suite-interaction"
            >
              <span className="colorAndFont">
                Simmanager-beta_suite-interaction{" "}
                <img src={white_paper} className="doc-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={MODEL_COMPARISION_IN_ANSA_META}
              download="ansa_model_comparison"
            >
              <span className="colorAndFont">
                Model comparison in ANSA & META{" "}
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="docFilesMarginLeft">
            <a
              href={DIFFRENCE_BTW_FBDM_SBDM}
              download="diffrence_btw_FBDM_SBDM"
            >
              <span className="colorAndFont">
                Difference between FBDM & SBDM{" "}
                <img src={document_logo} className="doc-logo" />
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
              href="https://www.youtube.com/watch?v=F6XmKCHOj_M"
              target="_black"
            >
              <span className="colorAndFont">
                Model assembly and iterations management{" "}
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ"
              target="_black"
            >
              <span className="colorAndFont">
                Modular Run Management in ANSA{" "}
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?v=9nSnRavh_Fc"
              target="_black"
            >
              <span className="colorAndFont">
                Model Assembly to Loadcase Set-up{" "}
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="youtubeFilesMarginLeft">
            <a
              href="https://www.youtube.com/watch?v=67lnE2tJLes"
              target="_black"
            >
              <span className="colorAndFont">
                Simulation Process_Data Management at CEVT{" "}
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="linkDiv">
          {/* <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={link_main} style={{ width: "25px" }} />
          </div> */}
          {/* <spna style={{ fontWeight: "700", color: "black" }}>Links</spna> */}

          {/* confluence links */}
          {/* <div style={{ borderLeft: "5px solid blue" }}> */}
          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=55018831"
              target="_blank"
            >
              <span className="colorAndFont">
                Why MRM? <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/Presentations"
              target="_blank"
            >
              <span className="colorAndFont">
                Presentations
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=55018685"
              target="_blank"
            >
              <span className="colorAndFont">
                Modular Run Management (MRM) confluence{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/Trainings"
              target="_blank"
            >
              <span className="colorAndFont">
                Trainings <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266332/20220606_Run_history_and_Changeset_Management_v22.1.3.pdf"
              target="_blank"
            >
              <span className="colorAndFont">
                Run history and Changeset Management{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266339/Set_Up_Modular_Environment_Profiles.pdf"
              target="_blank"
            >
              <span className="colorAndFont">
                How to set up MEPs in DM{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266341/Update_Of_Subsystems.pdf"
              target="_blank"
            >
              <span className="colorAndFont">
                Update of Subsystems{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266405/Modular%20Run%20Management%20for%20Durability.pdf"
              target="_blank"
            >
              <span className="colorAndFont">
                Modular Run Management for Durability{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266399/20200424_Honda_NA_Modular_Run_Management.pdf"
              target="_blank"
            >
              <span className="colorAndFont">
                Model migration and Loadcase setup{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/112265693/GES_NVH_Modular_Approach__demo_notes.pptx"
              target="_blank"
            >
              <span className="colorAndFont">
                BIW Decomposition and integration
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>
        </div>
        <div className="totirial">
          <span style={{ fontWeight: "700", color: " rgb(59, 240, 240)" }}>
            Tutorials
          </span>
          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=93693859"
              target="_blank"
            >
              <span className="colorAndFont">
                Subsystem Build <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=93693849"
              target="_blank"
            >
              <span className="colorAndFont">
                Model Organization with the Model Browser
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=93693857"
              target="_blank"
            >
              <span className="colorAndFont">
                Modular set-up of a static simulation for EPILYSIS{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=93693851"
              target="_blank"
            >
              <span className="colorAndFont">
                Modular set-up of a static simulation for ABAQUS{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=93693855"
              target="_blank"
            >
              <span className="colorAndFont">
                Modular set-up of a crash simulation for LS-DYNA{" "}
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="tutorialsFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/pages/viewpage.action?pageId=93693853"
              target="_blank"
            >
              <span className="colorAndFont">
                Modular set-up of crash simulation for PAM-CRASH
                <img src={link_logo} className="link-logo" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Mrm;
