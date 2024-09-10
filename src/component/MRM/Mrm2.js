import React,{useState} from "react";
import "./Mrm.css";

import "@react-pdf-viewer/core/lib/styles/index.css";

import link_logo from "../Assets/link_logo.jpg";
import ASSEMBLY_VIDEO from "../Assets/MRM/AssemblySet.mp4"
import video_logo from "../Assets/video1.jpg"
import beta_logo from "../Assets/beta_logo.png";
import cross_icon from "../Assets/cross_icon.png";

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
          <div className="linkDiv" style={{ marginTop: "-10px" }}>
            <span style={{ fontWeight: "700", color: " blue" }}>
              Confluence docs
            </span>
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
                  Model migration and Loadcase setup
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
                  Modular set-up of a static simulation for EPILYSIS
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
                  Modular set-up of a static simulation for ABAQUS
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
                  Modular set-up of a crash simulation for LS-DYNA
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

              <div className="innerdivs" id="videoFilesMarginLeft">
                <a
                  // href={HM_FROM_SPDRM_VIDEO}
                  download="edit_hm_from_spdrm"
                  onClick={() =>
                    setVideocardValues({
                      state: true,
                      link: ASSEMBLY_VIDEO,
                      videoName: "Edit HM from SPDRM",
                    })
                  }
                >
                  <div style={{ display: "flex" }}>
                    <div className="colorAndFont" style={{ marginTop: "4px" }}>
                      Assembly Set
                    </div>
                    <div>
                      <img src={video_logo} style={{ width: "25px" }} />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>


    // </div>
  );
};

export default Mrm;
