import React from "react";
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
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
          style={{ paddingLeft: "40px", marginTop: "-15px", fontSize: "25px" }}
        >
          ML
        </div>
      </div>

      <div className="datadiv">
        <div className="pdfFilesdiv">
          <spna style={{ fontWeight: "700", color: "blue" }}>Documents</spna>
          <div className="innerdivs">
            <div>
              <span className="colorAndFont">ML fasteners</span>
            </div>
            <div>
              <a href={ML_FASTNER} download="ML_fasteners">
                <img src={pdf_logo} className="pdf-logo" />
              </a>
            </div>
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
            <div>
              <span className="colorAndFont">
                ML in feature detection for meshing
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?app=desktop&v=46cnjoS9zNM"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Training dataset and perform ML and Design
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=0JnzxLrmgLQ"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">ML in Feature Detection</span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=CbyqwVCM3xM"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                Model Parameterization in ANSA
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?app=desktop&v=WshD4GT6ycc"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>

          <div className="innerdivs">
            <div>
              <span className="colorAndFont">
                SEAT:optimize design of a car-body-structure by ML
              </span>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?app=desktop&v=_OBhv8WXFqc"
                target="_black"
              >
                <img src={youtube_logo} className="youtube-logo" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ml;
