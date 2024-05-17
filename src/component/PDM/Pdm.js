import React from 'react'
import pdf_logo from "../Assets/pdf_logo.webp";
import link_logo from "../Assets/link_logo.jpg";
import youtube_logo from "../Assets/youtube_logo.png";
import beta_logo from "../Assets/beta_logo.png"
import CAE_MODEL_GENERATION_PDM_AND_CAD from "../Assets/PDM/renault_cae_model_generation.pdf"
const Pdm = () => {
  return (
    <div className="common">
      <div className="imagediv">
        <img
          src={beta_logo}
          alt="ansers_logo"
          style={{ width: "18px", height: "18px", paddingLeft: "90px" }}
        />
        <div style={{ paddingLeft: "10px" }}>PDM TO CAD</div>
      </div>

      <div className="datadiv">
        <div className="innerdivs">
          <div>
            <span className="colorAndFont">
              RENAULT:CAE model generation from CAD and PDM info
            </span>
          </div>
          <div>
            <a
              href={CAE_MODEL_GENERATION_PDM_AND_CAD}
              download="cae_model_generation_pdm_and_cad"
            >
              <img src={pdf_logo} className="pdf-logo" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdm