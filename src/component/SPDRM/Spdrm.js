import React from "react";
import "./Spdrm.css";
import ansers_log from "../Assets/ANSERS/logo_ansers.png";
import spderm_logo from "../Assets/SPDRM/logo_cropped_spdrm.png";
import komvos_logo from "../Assets/KOMVOS/logo_cropped_komvos.png";
import ansa_logo from "../Assets/ANSADM/logo_cropped_ansa.png";
import pdf_logo from "../Assets/pdf_logo.webp";
import document_logo from "../Assets/document_logo.png";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import link_main from "../Assets/link_main.jpg";
import ppt_logo from "../Assets/ppt_logo.png"
import brochers_logo from "../Assets/brochers.png";
import video_logo from "../Assets/video.png"

import SPDRM_BROCHER from "../Assets/SPDRM/spdrm_brochure.pdf";
import SPDRM_QA from "../Assets/SPDRM/spdrm_qa.pdf";
import SPDRM_SYSTEM_REQUIREMENT from "../Assets/SPDRM/system_requirements (1).pdf";
import SPDRM_SUPERIORITY from "../Assets/SPDRM/spdrm_superiority.pdf";
import SPDRM_VEHICLE_COLLISION from "../Assets/SPDRM/vehicle_collision.pdf";
import POWER_OF_PROCESS_MANAGMENT from "../Assets/SPDRM/Unlocking_the_power_of_process_management_with_SPDRM.pdf";
import MULTI_SITE_COLLABRATION from "../Assets/SPDRM/multisite_collabration.pdf";
import SPDRM_ADM_GUIDE from "../Assets/SPDRM/spdrm_administrators_guide.pdf"
import SPDRM_USER_GUIDE from "../Assets/SPDRM/spdrm_users_guide.pdf"
import SPDRM_INSTALLATION_GUIDE from "../Assets/SPDRM/spdrm_installation_guide.pdf"
import EXE_DESIGN_PROCESS from "../Assets/SPDRM/Execution_and_Design_Processes.pdf"
import INTRODUCTION_TO_SPDRM from "../Assets/SPDRM/20240300_introduction_to_SPDRM.pdf"
import SPDRM_TUTORIAL from "../Assets/SPDRM/spdrm_tutorial.pdf"
import HM_FROM_SPDRM_VIDEO from "../Assets/SPDRM/Edit in HM from SPDRM.avi"
import TC_SPDRM_VIDEO from "../Assets/SPDRM/TC-SPDRM.avi"
const Spdrm = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={spderm_logo} alt="spderm_logo" />
      </div>
      <div className="datadiv">
        <div className="pdfFilesdiv">
          
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={INTRODUCTION_TO_SPDRM} download="introduction_to_SPDRM">
              <span className="colorAndFont">
                Introduction to SPDRM
                <img src={ppt_logo} className="doc-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={SPDRM_TUTORIAL} download="spdrm_tutorial">
              <span className="colorAndFont">
                SPDRM tutorial
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={SPDRM_BROCHER} download="spderm_brochers">
              <span className="colorAndFont">
                SPDRM brochure{" "}
                <img src={brochers_logo} className="doc-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={SPDRM_SYSTEM_REQUIREMENT}
              download="spdrm_system_requirements"
            >
              <span className="colorAndFont">
                SPDRM system requirements{" "}
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={SPDRM_QA} download="spdrm_qa">
              <span className="colorAndFont">
                SPDRM Q&A
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={SPDRM_SUPERIORITY} download="spdrm_superiority">
              <span className="colorAndFont">
                SPDRM superiority
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={SPDRM_VEHICLE_COLLISION}
              download="Vehicle_collision_simulation_process_management_using_SPDRM"
            >
              <span className="colorAndFont">
                Vehicle collision in Jiangling Motors in SPDRM{" "}
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={EXE_DESIGN_PROCESS}
              download="Execution_and_Design_Processes.pdf"
            >
              <span className="colorAndFont">
                Execution and process design
                <img src={pdf_logo} className="pdf-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={POWER_OF_PROCESS_MANAGMENT}
              download="Unlocking_the_power_of_process_management_with_SPDRM"
            >
              <span className="colorAndFont">
                Power of process management with SPDRM{" "}
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>

            <a
              href="https://www.youtube.com/embed/cE-xJgHnfaE?rel=0"
              target="_blank"
            >
              <img src={youtube_logo} className="youtube-logo" />
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={MULTI_SITE_COLLABRATION} download="multisite_collabration">
              <span className="colorAndFont">
                Multi-site collaboration to unite global teams
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
            <a
              href="https://www.youtube.com/embed/UiSqSQYlUjE?rel=0"
              target="_blank"
            >
              <img src={youtube_logo} className="youtube-logo" />
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={HM_FROM_SPDRM_VIDEO} download="edit_hm_from_spdrm">
              <span className="colorAndFont">
                Edit HM from SPDRM <img src={video_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={TC_SPDRM_VIDEO} download="tc_spdrm">
              <span className="colorAndFont">
                TC SPDRM <img src={video_logo} className="pdf-logo" />
              </span>
            </a>
          </div>
        </div>
        <div className="guides">
          <span style={{ fontWeight: "700", color: "brown" }}>Guides</span>
          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={SPDRM_ADM_GUIDE} download="spderm_administartor_guide">
              <span className="colorAndFont">
                SPDRM administrators guide
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a
              href={SPDRM_INSTALLATION_GUIDE}
              download="spdrm_installation_guide"
            >
              <span className="colorAndFont">
                SPDRM installation guide
                <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="pdfFilesMarginLeft">
            <a href={SPDRM_USER_GUIDE} download="spdrm_users_guide">
              <span className="colorAndFont">
                SPDRM user guide <img src={pdf_logo} className="pdf-logo" />
              </span>
            </a>
          </div>
        </div>

        <div className="linkDiv">
          <div className="innerdivs" id="productFilesMarginLeft">
            <a href="https://www.beta-cae.com/spdrm.htm" target="_blank">
              <span className="colorAndFont">
                SPDRM product site
                <img src={link_logo} className="link-logo" alt="" />
              </span>
            </a>
          </div>

          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a href="https://kb.beta-cae.com/display/SS/SPDRM" target="_blank">
              <span className="colorAndFont">
                SPDRM confluence space{" "}
                <img src={link_logo} className="link-logo" alt="" />
              </span>
            </a>
          </div>
          <div className="innerdivs" id="confluenceFilesMarginLeft">
            <a
              href="https://kb.beta-cae.com/display/SPDM/SPDM+Team"
              target="_blank"
            >
              <span className="colorAndFont">
                SPDM team space
                <img src={link_logo} className="link-logo" alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Spdrm;
