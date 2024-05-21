import React from "react";
import "./Mrm.css";

import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import document_logo from "../Assets/document_logo.png";
import beta_logo from "../Assets/beta_logo.png";

import MRM_PDF from "../Assets/MRM/Modular_Model_and_Run_Management.pdf";
import DATA_MANAGMENT from "../Assets/MRM/1data_management.pdf";
import INTRODUCTION_TO_MRM from "../Assets/MRM/Intorduction_to_Modular_Model_and_Run_management.pdf";
import EXE_DESIGN_PROCESS from "../Assets/MRM/Execution_and_Design_Processes.pdf";
import DATA_MANAGMENT_BROCHER from "../Assets/MRM/data_management_brochure.pdf";
import DIFFRENCE_BTW_FBDM_SBDM from "../Assets/MRM/Difference_FBDM_ServerBasedDM.docx";
import MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING from "../Assets/MRM/multivariant_multidiscipline_ansa_modeling.pdf"
import MODULAR_RUN_MANGMENT_2 from "../Assets/MRM/modular_run_management.pdf"
import SIMMANAGER_BETA_SUITE_INTRACTION from "../Assets/MRM/simmanager-beta_suite-interaction.pdf"
import MODEL_COMPARISION_IN_ANSA_META from "../Assets/MRM/ansa_model_comparison.pdf"
import ANSA_TC_SIM_WHITE_PAPER from "../Assets/MRM/ansa_tc_sim_white_paper.pdf"
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
          <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Introduction to Modular Model Run Managment
              </span>
            </div>
            <div>
              <a
                href={INTRODUCTION_TO_MRM}
                download="Intorduction_to_Modular_Model_and_Run_management"
              >
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">Modular Model Run Managment</span>
            </div>
            <div>
              <a href={MRM_PDF} download="Modular_Model_and_Run_Management">
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">Data Managment</span>
            </div>
            <div>
              <a href={DATA_MANAGMENT} download="Data_managment">
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">Data Managment brochure</span>
            </div>
            <div>
              <a
                href={DATA_MANAGMENT_BROCHER}
                download="Data_managment_brochure"
              >
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">Execution and process design</span>
            </div>
            <div>
              <a
                href={EXE_DESIGN_PROCESS}
                download="Execution_and_Design_Processes.pdf"
              >
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Multidiscipline ansa modeling
              </span>
            </div>
            <div>
              <a
                href={MULTIVARIENT_MULTIDISCIPLINE_ANSA_MODELING}
                download="multivariant_multidiscipline_ansa_modeling"
              >
                <img src={pdf_logo} className="doc-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">Modular run managament</span>
            </div>
            <div>
              <a
                href={MODULAR_RUN_MANGMENT_2}
                download="modular_run_management"
              >
                <img src={pdf_logo} className="doc-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Simmanager-beta_suite-interaction
              </span>
            </div>
            <div>
              <a
                href={SIMMANAGER_BETA_SUITE_INTRACTION}
                download="simmanager-beta_suite-interaction"
              >
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Model comparison in ANSA & META
              </span>
            </div>
            <div>
              <a
                href={MODEL_COMPARISION_IN_ANSA_META}
                download="ansa_model_comparison"
              >
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">Ansa tc sim white papers</span>
            </div>
            <div>
              <a
                href={ANSA_TC_SIM_WHITE_PAPER}
                download="ansa_tc_sim_white_paper"
              >
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Difference between FBDM & SBDM
              </span>
            </div>
            <div>
              <a
                href={DIFFRENCE_BTW_FBDM_SBDM}
                download="diffrence_btw_FBDM_SBDM"
              >
                <img src={document_logo} className="doc-logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="youtubeDiv">
          <spna style={{ fontWeight: "700", color: "red" }}>Videos</spna>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Model assembly and iterations management
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=F6XmKCHOj_M"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Modular Run Management in ANSA
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUfKxCiLdlqqJ43eCYEQhHKZ"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Model Assembly to Loadcase Set-up
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=9nSnRavh_Fc"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Simulation Process_Data Management at CEVT
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=67lnE2tJLes"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="linkDiv">
          <spna style={{ fontWeight: "700", color: "black" }}>Links</spna>

          {/* confluence links */}
          <div style={{ borderLeft: "5px solid blue" }}>
            <div className="innerdivs">
              <div>
                <span className="colorAndFont">Why MRM?</span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/pages/viewpage.action?pageId=55018831"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">Presentations</span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/Presentations"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">
                  Modular Run Management (MRM) confluence
                </span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/pages/viewpage.action?pageId=55018685"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">Trainings</span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/Trainings"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">
                  Run history and Changeset Management
                </span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266332/20220606_Run_history_and_Changeset_Management_v22.1.3.pdf"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">How to set up MEPs in DM</span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266339/Set_Up_Modular_Environment_Profiles.pdf"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">Update of Subsystems</span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266341/Update_Of_Subsystems.pdf"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">
                  Modular Run Management for Durability
                </span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266405/Modular%20Run%20Management%20for%20Durability.pdf"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">
                  Model migration and Loadcase setup
                </span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/81266399/20200424_Honda_NA_Modular_Run_Management.pdf"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span className="colorAndFont">
                  BIW Decomposition and integration
                </span>
              </div>
              <div>
                <a
                  href="https://kb.beta-cae.com/display/MRM/How-to+guides?preview=/81266327/112265693/GES_NVH_Modular_Approach__demo_notes.pptx"
                  target="_blank"
                >
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mrm;
