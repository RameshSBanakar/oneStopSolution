import React from "react";
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import document_main from "../Assets/doument_main.png";

import youtube_logo from "../Assets/youtube_logo.png";
import static_youtube_logo from "../Assets/static_youtube_logo.png"
import beta_logo from "../Assets/beta_logo.png";
import ML_FASTNER from "../Assets/ML/ML_fasteners.pdf";
const Ml = () => {
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
            paddingLeft: "40px",
            marginTop: "-15px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          ML
        </div>
      </div>

      <div className="datadiv">
        <div className="pdfFilesdiv">
          <div style={{ marginLeft: "-10px", marginTop: "-10px" }}>
            <img src={document_main} style={{ width: "25px" }} />
          </div>
          {/* <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna> */}
          <div className="innerdivs">
          
              <a href={ML_FASTNER} download="ML_fasteners">
                <span className="colorAndFont">
                  ML fasteners <img src={pdf_logo} className="pdf-logo" />
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
                href="https://www.youtube.com/watch?app=desktop&v=46cnjoS9zNM"
                target="_black"
              >
                <span className="colorAndFont">
                  ML in feature detection for meshing{" "}
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </span>
              </a>
           
          </div>

          <div className="innerdivs">
            
              <a
                href="https://www.youtube.com/watch?v=0JnzxLrmgLQ"
                target="_black"
              >
                <span className="colorAndFont">
                  Training dataset and perform ML and Design{" "}
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </span>
              </a>
            
          </div>

          <div className="innerdivs">
           
         
              <a
                href="https://www.youtube.com/watch?v=CbyqwVCM3xM"
                target="_black"
              >
                <span className="colorAndFont">
                  ML in Feature Detection{" "}
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </span>
              </a>
            
          </div>

          <div className="innerdivs">
           
         
              <a
                href="https://www.youtube.com/watch?app=desktop&v=WshD4GT6ycc"
                target="_black"
              >
                <span className="colorAndFont">
                  Model Parameterization in ANSA
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </span>
              </a>
           
          </div>

          <div className="innerdivs">
           
             
              <a
                href="https://www.youtube.com/watch?app=desktop&v=_OBhv8WXFqc"
                target="_black"
              >
                <span className="colorAndFont">
                  SEAT:optimize design of a car-body-structure by ML{" "}
                  <img src={youtube_logo} className="youtube-logo" alt="" />
                </span>
              </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ml;
