import React from "react";
import "./Spdrm.css"
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

const Spdrm = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={spderm_logo} alt="spderm_logo" />
      </div>
      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">1.SPDRM brochure</span>
          </div>
          <div>
            <a href={SPDRM_BROCHER} download="spderm_brochers">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">2.SPDRM system requirements</span>
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
            <span className="colorAndFont">3.SPDRM Q&A</span>
          </div>
          <div>
            <a href={SPDRM_QA} download="spdrm_qa">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">4.SPDRM superiority</span>
          </div>
          <div>
            <a href={SPDRM_SUPERIORITY} download="spdrm_superiority">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">5. SPDRM product site</span>
          </div>
          <div>
            <a href="https://www.beta-cae.com/spdrm.htm" target="_blank">
              <img src={link_logo} className="link-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spdrm;
