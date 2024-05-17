import React from "react";
import "./Komvos.css"
import ansers_log from "../Assets/ANSERS/logo_ansers.png";
import spderm_logo from "../Assets/SPDRM/logo_cropped_spdrm.png";
import komvos_logo from "../Assets/KOMVOS/logo_cropped_komvos.png";
import ansa_logo from "../Assets/ANSADM/logo_cropped_ansa.png";
import pdf_logo from "../Assets/pdf_logo.webp";
import document_logo from "../Assets/document_logo.png";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";

import KOMVOS_INTRODUCTIOn_PDF from "../Assets/KOMVOS/20231016_introduction_to_KOMVOS.pdf";
import KOMVOS_UI_WALKTHROUGH from "../Assets/KOMVOS/20220700_KOMVOS_UI_walkthrough.pdf";
import KOMVOS_USERGUIDE from "../Assets/KOMVOS/KOMVOS_User_Guide.pdf";
import KOMVOS_BROCHER from "../Assets/KOMVOS/komvos_brochure.pdf";
import KOMVOS_SYSTEM_REQUIREMENT from "../Assets/KOMVOS/system_requirements.pdf";
import KMOVOS_EXPLAIND from "../Assets/KOMVOS/komvos_explained.pdf";
import KOMVOS_QA from "../Assets/KOMVOS/komvos_qa.pdf";
import KOMVOS_SHORT_NOTES from "../Assets/KOMVOS/KOMVOS_shortened.docx";

const Komvos = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={komvos_logo} />
      </div>
      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              1.KOMVOS - The innovative SDM platform
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/embed/mq4HrOafuO0?rel=0"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">2.KOMVOS Tutorials</span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUd96uYCP7pV_ekfM6JPvCvu"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">3.Introduction to KOMVOS</span>
          </div>
          <div>
            <a href={KOMVOS_INTRODUCTIOn_PDF} download="introduction_to_komvos">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">4.KOMVOS UI walkthrough</span>
          </div>
          <div>
            <a href={KOMVOS_UI_WALKTHROUGH} download="komvos_ui_walkthrough">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">5.KOMVOS user guide</span>
          </div>
          <div>
            <a href={KOMVOS_USERGUIDE} download="komvos_userguide">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">6.KOMVOS brochure</span>
          </div>
          <div>
            <a href={KOMVOS_BROCHER} download="komvos_brochers">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">7.KOMVOS system requirements</span>
          </div>
          <div>
            <a
              href={KOMVOS_SYSTEM_REQUIREMENT}
              download="komvos_system_requirement"
            >
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">8.KOMVOS explained</span>
          </div>
          <div>
            <a href={KMOVOS_EXPLAIND} download="komvos_explained">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">9.KOMVOS Q&A</span>
          </div>
          <div>
            <a href={KOMVOS_QA} download="komvos_qa">
              <img src={pdf_logo} className="pdf-logo" />
            </a>
          </div>
        </div>

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">10.KOMVOS short notes</span>
          </div>
          <div>
            <a href={KOMVOS_SHORT_NOTES} download="komvos_short_notes">
              <img src={document_logo} className="doc-logo" />
            </a>
          </div>
        </div>
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">11.KOMVOS prdouct site</span>
          </div>
          <div>
            <a href="https://www.beta-cae.com/komvos.htm" target="_blank">
              <img src={link_logo} className="link-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komvos;
