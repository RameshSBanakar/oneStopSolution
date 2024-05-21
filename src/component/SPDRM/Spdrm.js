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

import SPDRM_BROCHER from "../Assets/SPDRM/spdrm_brochure.pdf";
import SPDRM_QA from "../Assets/SPDRM/spdrm_qa.pdf";
import SPDRM_SYSTEM_REQUIREMENT from "../Assets/SPDRM/system_requirements (1).pdf";
import SPDRM_SUPERIORITY from "../Assets/SPDRM/spdrm_superiority.pdf";
import SPDRM_VEHICLE_COLLISION from "../Assets/SPDRM/vehicle_collision.pdf";
import POWER_OF_PROCESS_MANAGMENT from "../Assets/SPDRM/Unlocking_the_power_of_process_management_with_SPDRM.pdf"
const Spdrm = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={spderm_logo} alt="spderm_logo" />
      </div>
      <div className="datadiv">
        <div className="pdfFilesdiv">
          <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">SPDRM brochure</span>
            </div>
            <div>
              <a href={SPDRM_BROCHER} download="spderm_brochers">
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">SPDRM system requirements</span>
            </div>
            <div>
              <a
                href={SPDRM_SYSTEM_REQUIREMENT}
                download="spdrm_system_requirements"
              >
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">SPDRM Q&A</span>
            </div>
            <div>
              <a href={SPDRM_QA} download="spdrm_qa">
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">SPDRM superiority</span>
            </div>
            <div>
              <a href={SPDRM_SUPERIORITY} download="spdrm_superiority">
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Vehicle collision in Jiangling Motors in SPDRM
              </span>
            </div>
            <div>
              <a
                href={SPDRM_VEHICLE_COLLISION}
                download="Vehicle_collision_simulation_process_management_using_SPDRM"
              >
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Power of process management with SPDRM
              </span>
            </div>
            <div>
              <a
                href={POWER_OF_PROCESS_MANAGMENT}
                download="Unlocking_the_power_of_process_management_with_SPDRM"
              >
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="linkDiv">
          <spna style={{ fontWeight: "700", color: "black" }}>Links</spna>
          <div style={{ borderLeft: "5px solid red" }}>
            {" "}
            <div className="innerdivs">
              <div>
                <span className="colorAndFont">SPDRM product site</span>
              </div>
              <div>
                <a href="https://www.beta-cae.com/spdrm.htm" target="_blank">
                  <img src={link_logo} className="link-logo" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spdrm;
