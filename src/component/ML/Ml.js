import React from 'react'
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import beta_logo from "../Assets/beta_logo.png"
import ML_FASTNER from "../Assets/ML/ML_fasteners.pdf"
const Ml = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img
          src={beta_logo}
          alt="ansers_logo"
          style={{ width: "18px", height: "18px", paddingLeft: "90px" }}
        />
        <div style={{ paddingLeft: "50px" }}>ML</div>
      </div>

      <div className="datadiv">
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

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              Machine Learning in feature detection for meshing applications
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?app=desktop&v=46cnjoS9zNM"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" alt="" />
            </a>
          </div>
        </div>

        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              training dataset and perform Machine Learning and Design
           
            </span>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=0JnzxLrmgLQ"
              target="_black"
            >
              <img src={youtube_logo} className="link-logo" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ml