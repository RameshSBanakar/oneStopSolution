import React from 'react'
import "./Home.css"
//all logos imported
import ansers_log from "../Assets/ANSERS/logo_ansers.png"
import spderm_logo from "../Assets/SPDRM/logo_cropped_spdrm.png"
import komvos_logo from "../Assets/KOMVOS/logo_cropped_komvos.png"
import ansa_logo from "../Assets/ANSADM/logo_cropped_ansa.png"
import pdf_logo from "../Assets/pdf_logo.webp"
import document_logo from "../Assets/document_logo.png"
import link_logo from "../Assets/link_logo.jpg"
import youtube_logo from "../Assets/youtube_logo.png"

//komvos docs imported
import KOMVOS_INTRODUCTIOn_PDF from "../Assets/KOMVOS/20231016_introduction_to_KOMVOS.pdf"
import KOMVOS_UI_WALKTHROUGH from "../Assets/KOMVOS/20220700_KOMVOS_UI_walkthrough.pdf"
import KOMVOS_USERGUIDE from "../Assets/KOMVOS/KOMVOS_User_Guide.pdf"
import KOMVOS_BROCHER from "../Assets/KOMVOS/komvos_brochure.pdf"
import KOMVOS_SYSTEM_REQUIREMENT from "../Assets/KOMVOS/system_requirements.pdf"
import KMOVOS_EXPLAIND from "../Assets/KOMVOS/komvos_explained.pdf"
import KOMVOS_QA from "../Assets/KOMVOS/komvos_qa.pdf"
import KOMVOS_SHORT_NOTES from "../Assets/KOMVOS/KOMVOS_shortened.docx"

//spderm docs imported
import SPDRM_BROCHER from "../Assets/SPDRM/spdrm_brochure.pdf"
import SPDRM_QA from "../Assets/SPDRM/spdrm_qa.pdf"
import SPDRM_SYSTEM_REQUIREMENT from "../Assets/SPDRM/system_requirements (1).pdf"
import SPDRM_SUPERIORITY from "../Assets/SPDRM/spdrm_superiority.pdf"

//mrm docs imported
import MRM_PDF from "../Assets/MRM/Modular_Model_and_Run_Management.pdf"
import DATA_MANAGMENT from "../Assets/MRM/1data_management.pdf"
import INTRODUCTION_TO_MRM from "../Assets/MRM/Intorduction_to_Modular_Model_and_Run_management.pdf"
import EXE_DESIGN_PROCESS from "../Assets/MRM/Execution_and_Design_Processes.pdf"

//anser docs imported
import ANSERS_BROCHERS from "../Assets/ANSERS/ansers_brochure.pdf"
import ANSERS_QA from "../Assets/ANSERS/ansers_qa.pdf"
const Home = () => {
  return (
    <div className="home">
      <div className="firstROw">
        <div className="common">
          <div className="imagediv">
            <img src={ansers_log} alt="ansers_logo" />
          </div>
          <div></div>
          <div className="datadiv">
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  1.Videos for MRM
                </span>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=F6XmKCHOj_M"
                  target="_black"
                >
                  <img src={youtube_logo} className="link-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  2.Introduction to Modular Model Run Managment
                </span>
              </div>
              <div>
                <a
                  href={INTRODUCTION_TO_MRM}
                  download="Intorduction_to_Modular_Model_and_Run_management"
                >
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  3.Modular Model Run Managment
                </span>
              </div>
              <div>
                <a href={MRM_PDF} download="Modular_Model_and_Run_Management">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  4.Data Managment
                </span>
              </div>
              <div>
                <a href={DATA_MANAGMENT} download="Data_managment">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  5.Executin and process design
                </span>
              </div>
              <div>
                <a
                  href={EXE_DESIGN_PROCESS}
                  download="Execution_and_Design_Processes.pdf"
                >
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* KOMVOS starts from here */}
        <div className="common">
          <div className="imagediv">
            <img src={komvos_logo} />
          </div>
          <div className="datadiv">
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  1.Videos for KOMVOS
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
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  2.Videos for KOMVOS
                </span>
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
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  3.Introduction to KOMVOS
                </span>
              </div>
              <div>
                <a
                  href={KOMVOS_INTRODUCTIOn_PDF}
                  download="introduction_to_komvos"
                >
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  4.KOMVOS UI walkthrough
                </span>
              </div>
              <div>
                <a
                  href={KOMVOS_UI_WALKTHROUGH}
                  download="komvos_ui_walkthrough"
                >
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  5.KOMVOS user guide
                </span>
              </div>
              <div>
                <a href={KOMVOS_USERGUIDE} download="komvos_userguide">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  6.KOMVOS Brochers
                </span>
              </div>
              <div>
                <a href={KOMVOS_BROCHER} download="komvos_brochers">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  7.KOMVOS system requirements
                </span>
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
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  8.KOMVOS explained
                </span>
              </div>
              <div>
                <a href={KMOVOS_EXPLAIND} download="komvos_explained">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  9.KOMVOS questions&answers
                </span>
              </div>
              <div>
                <a href={KOMVOS_QA} download="komvos_qa">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>

            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  10.KOMVOS short notes
                </span>
              </div>
              <div>
                <a href={KOMVOS_SHORT_NOTES} download="komvos_short_notes">
                  <img src={document_logo} className="doc-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  11.official site visit
                </span>
              </div>
              <div>
                <a href="https://www.beta-cae.com/komvos.htm" target="_blank">
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="firstROw">
        {/* ansers starts from here */}
        <div className="common">
          <div className="imagediv">
            <img src={ansers_log} alt="ansers_logo" />
          </div>
          <div className="datadiv">
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  1.Videos for ANSERS
                </span>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=Titc8XDynk4&t=2s"
                  target="_black"
                >
                  <img src={youtube_logo} className="link-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  2.Ansers Brochers
                </span>
              </div>
              <div>
                <a href={ANSERS_BROCHERS} download="ansers_brochers">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  3.Ansers Questions&Answers
                </span>
              </div>
              <div>
                <a href={ANSERS_QA} download="ansers_qa">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  4.official site visit
                </span>
              </div>
              <div>
                <a href="https://www.beta-cae.com/ansers.htm" target="_blank">
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* spdrm starts here */}
        <div className="common">
          <div className="imagediv">
            <img src={spderm_logo} alt="spderm_logo" />
          </div>
          <div className="datadiv">
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  1.SPDRM brochers
                </span>
              </div>
              <div>
                <a href={SPDRM_BROCHER} download="spderm_brochers">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  2.SPDRM system requirements
                </span>
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
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  3.SPDRM questions&answers
                </span>
              </div>
              <div>
                <a href={SPDRM_QA} download="spdrm_qa">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  4.SPDRM superiority
                </span>
              </div>
              <div>
                <a href={SPDRM_SUPERIORITY} download="spdrm_superiority">
                  <img src={pdf_logo} className="pdf-logo" />
                </a>
              </div>
            </div>
            <div className="innerdivs">
              <div>
                <span style={{ color: "#63666A", fontWeight: "500" }}>
                  5. SPDRM official site
                </span>
              </div>
              <div>
                <a href="https://www.beta-cae.com/spdrm.htm" target="_blank">
                  <img src={link_logo} className="link-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="common">
        <div className="imagediv">
          <img src={ansa_logo} alt="ansers_logo" />
        </div>
      </div> */}
    </div>
  );
}

export default Home
