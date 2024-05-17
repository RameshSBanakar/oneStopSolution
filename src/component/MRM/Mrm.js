import React from "react";
import "./Mrm.css";
import ansers_log from "../Assets/ANSERS/logo_ansers.png";

import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg"
import youtube_logo from "../Assets/youtube_logo.png";

import MRM_PDF from "../Assets/MRM/Modular_Model_and_Run_Management.pdf";
import DATA_MANAGMENT from "../Assets/MRM/1data_management.pdf";
import INTRODUCTION_TO_MRM from "../Assets/MRM/Intorduction_to_Modular_Model_and_Run_management.pdf";
import EXE_DESIGN_PROCESS from "../Assets/MRM/Execution_and_Design_Processes.pdf";
import DATA_MANAGMENT_BROCHER from "../Assets/MRM/data_management_brochure.pdf";
const Mrm = () => {
  return (
    <div className="common">
      <div className="imagediv">
        {/* <img src={ansers_log} alt="ansers_logo" /> */}
        <div>MRM</div>
      </div>
      <div></div>
      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              1.simulation model assembly and management of iterations
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=F6XmKCHOj_M"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" alt="" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              2.Introduction to Modular Model Run Managment
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
            <span className="colorAndFont">3.Modular Model Run Managment</span>
          </div>
          <div>
            <a href={MRM_PDF} download="Modular_Model_and_Run_Management">
              <img src={pdf_logo} className="pdf-logo" alt="" />
            </a>
          </div>
        </div>

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">4.Data Managment</span>
          </div>
          <div>
            <a href={DATA_MANAGMENT} download="Data_managment">
              <img src={pdf_logo} className="pdf-logo" alt="" />
            </a>
          </div>
        </div>

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">5.Data Managment brochure</span>
          </div>
          <div>
            <a href={DATA_MANAGMENT_BROCHER} download="Data_managment_brochure">
              <img src={pdf_logo} className="pdf-logo" alt="" />
            </a>
          </div>
        </div>

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">6.Execution and process design</span>
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
              7. White Papers & Presentations
            </span>
          </div>
          <div>
            <a href="https://www.beta-cae.com/resources.htm" target="_blank">
              <img src={link_logo} className="link-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mrm;
