import React,{useState} from "react";
import "./Mrm.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf_logo from "../Assets/pdf_logo.webp";
import ppt_logo from "../Assets/PowerPoint-to-PDF-Icon-5-1.png";
import link_logo from "../Assets/link_logo.jpg";
import ASSEMBLY_VIDEO from "../Assets/MRM/AssemblySet.mp4"
import video_logo from "../Assets/videopng.png"
import beta_logo from "../Assets/beta_logo.png";
import cross_icon from "../Assets/cross_icon.png";
import FROM_INCLUDE_TO_MODEL_BROWSER from "../Assets/MRM/FromIncludesToModelBrowserContainers.pdf";
import PART_BUILD from "../Assets/MRM/part_build.pdf";

import BUILD_FASTENER_LIBRARY from "../Assets/MRM/BuildFastenersLibrary.pdf";
import AUTOMATIC_RECOG_FASTENER from "../Assets/MRM/fastener_library.pdf";
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
        <a
          href="https://www.beta-cae.com/ansa.htm"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
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
        </a>

        <div className="datadiv">
          <div
            className="pdfFilesdiv"
            style={{ marginTop: "-10px", marginBottom: "15px" }}
          >
            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(FROM_INCLUDE_TO_MODEL_BROWSER)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  From include to model browser(plugin)
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(PART_BUILD)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  Part Build Process
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            </div>

            <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(BUILD_FASTENER_LIBRARY)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  Build Fasteners Library
                  <img src={pdf_logo} className="pdf-logo" />
                </span>
              </a>
            </div>

            {/* <div className="innerdivs" id="pdfFilesMarginLeft">
              <a
                // href={MODEL_COMPARISION_IN_ANSA_META}
                onClick={() => handleDownload(AUTOMATIC_RECOG_FASTENER)}
                download="ansa_model_comparison"
              >
                <span className="colorAndFont">
                  Automatic Recognition of Fasteners
                  <img src={ppt_logo} alt="" className="ppt-logo" />
                </span>
              </a>
            </div> */}
          </div>

          <div className="linkDiv" style={{ marginTop: "-10px" }}>
            {/* <span style={{ fontWeight: "700", color: " blue" }}>
              Confluence docs
            </span> */}
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
            {/* <span style={{ fontWeight: "700", color: " rgb(59, 240, 240)" }}>
              Tutorials
            </span> */}
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
                    <img
                      src={video_logo}
                      style={{ width: "15px", marginLeft: "5px" }}
                    />
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
