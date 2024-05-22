import React from "react";
import "./Komvos.css";
import ansers_log from "../Assets/ANSERS/logo_ansers.png";
import spderm_logo from "../Assets/SPDRM/logo_cropped_spdrm.png";
import komvos_logo from "../Assets/KOMVOS/logo_cropped_komvos.png";
import ansa_logo from "../Assets/ANSADM/logo_cropped_ansa.png";
import pdf_logo from "../Assets/pdf_logo.webp";
import document_logo from "../Assets/document_logo.png";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import static_youtube_logo from "../Assets/static_youtube_logo.png"
import link_main from "../Assets/link_main.jpg";
import document_main from "../Assets/doument_main.png";

import KOMVOS_INTRODUCTIOn_PDF from "../Assets/KOMVOS/20231016_introduction_to_KOMVOS.pdf";
import KOMVOS_UI_WALKTHROUGH from "../Assets/KOMVOS/20220700_KOMVOS_UI_walkthrough.pdf";
import KOMVOS_USERGUIDE from "../Assets/KOMVOS/KOMVOS_User_Guide.pdf";
import KOMVOS_BROCHER from "../Assets/KOMVOS/komvos_brochure.pdf";
import KOMVOS_SYSTEM_REQUIREMENT from "../Assets/KOMVOS/system_requirements.pdf";
import KMOVOS_EXPLAIND from "../Assets/KOMVOS/komvos_explained.pdf";
import KOMVOS_QA from "../Assets/KOMVOS/komvos_qa.pdf";
import KOMVOS_SHORT_NOTES from "../Assets/KOMVOS/KOMVOS_shortened.docx";
import REINTRO_KOMVOS_AS_DESKTOP_CLIENT from "../Assets/KOMVOS/reintroduce KOMVOS as a simulation data and process managemenet desktop client.pdf"

const Komvos = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img src={komvos_logo} />
      </div>
      <div className="datadiv">
        <div className="pdfFilesdiv">
          <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={document_main} style={{ width: "25px" }} />
          </div>
          {/* <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna> */}
          <div className="innerdivs">
         
              <a
                href={KOMVOS_INTRODUCTIOn_PDF}
                download="introduction_to_komvos"
              >
                <span className="colorAndFont">
                  Introduction to KOMVOS{" "}
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
           
          </div>
          <div className="innerdivs">
           
              <a href={KOMVOS_UI_WALKTHROUGH} download="komvos_ui_walkthrough">
                <span className="colorAndFont">
                  KOMVOS UI walkthrough{" "}
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            
          </div>
          <div className="innerdivs">
          
              <a href={KOMVOS_USERGUIDE} download="komvos_userguide">
                <span className="colorAndFont">
                  KOMVOS user guide <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
          
          </div>
          <div className="innerdivs">
           
              <a href={KOMVOS_BROCHER} download="komvos_brochers">
                <span className="colorAndFont">
                  KOMVOS brochure <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
          </div>
          <div className="innerdivs">
           
              <a
                href={KOMVOS_SYSTEM_REQUIREMENT}
                download="komvos_system_requirement"
              >
                <span className="colorAndFont">
                  KOMVOS system requirements{" "}
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a> 
          </div>
          <div className="innerdivs">
           
              <a href={KMOVOS_EXPLAIND} download="komvos_explained">
                <span className="colorAndFont">
                  KOMVOS explained <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
          
          </div>

          <div className="innerdivs">
          
              <a href={KOMVOS_QA} download="komvos_qa">
                <span className="colorAndFont">
                  KOMVOS Q&A
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            
          </div>

          <div className="innerdivs">
           
              <a
                href={REINTRO_KOMVOS_AS_DESKTOP_CLIENT}
                download="reintroduce KOMVOS as a simulation data and process managemenet desktop client"
              >
                <span className="colorAndFont">
                  Reintro KOMVOS as desktop client
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
          
          </div>

          <div className="innerdivs">
          
              <a href={KOMVOS_SHORT_NOTES} download="komvos_short_notes">
                <span className="colorAndFont">
                  KOMVOS short notes
                  <img src={document_logo} className="doc-logo" />
                </span>
              </a>
           
          </div>
        </div>
        <div className="youtubeDiv">
          <div style={{ marginTop: "-22px", marginLeft: "-20px" }}>
            <img
              src={static_youtube_logo}
              alt=""
              style={{
                width: "60px",
              }}
            />
          </div>
          {/* <spna style={{ fontWeight: "700", color: "red" }}>Videos</spna> */}
          <div className="innerdivs">
       
              <a
                href="https://www.youtube.com/embed/mq4HrOafuO0?rel=0"
                target="_black"
              >
                <span className="colorAndFont">
                  KOMVOS - The innovative SDM platform{" "}
                  <img src={youtube_logo} className="youtube-logo" />
                </span>
              </a>
           
          </div>

          <div className="innerdivs">
           
              <a
                href="https://www.youtube.com/playlist?list=PL4Kh_GLK2cUd96uYCP7pV_ekfM6JPvCvu"
                target="_black"
              >
                <span className="colorAndFont">
                  KOMVOS Tutorials
                  <img src={youtube_logo} className="youtube-logo" />
                </span>
              </a>
          
          </div>

          <div className="innerdivs">
           
              <a
                href="https://www.youtube.com/embed/4NQksni1x1o?rel=0"
                target="_black"
              >
                <span className="colorAndFont">
                  Machine Learning in KOMVOS{" "}
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </span>
              </a>
            
          </div>
        </div>
        <div className="linkDiv">
          <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={link_main} style={{ width: "25px" }} />
          </div>
          {/* <spna style={{ fontWeight: "700", color: "black" }}>Links</spna> */}
          <div style={{ borderLeft: "5px solid orange" }}>
            <div className="innerdivs">
           
              
                <a href="https://www.beta-cae.com/komvos.htm" target="_blank">
                  <span className="colorAndFont">
                    KOMVOS prdouct site
                    <img src={link_logo} className="link-logo" />
                  </span>
                </a>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komvos;
