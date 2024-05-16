import React from 'react'
import "./Home.css"
import ansers_log from "../Assets/ANSERS/logo_ansers.png"
import spderm_logo from "../Assets/SPDRM/logo_cropped_spdrm.png"
import komvos_logo from "../Assets/KOMVOS/logo_cropped_komvos.png"
import ansa_logo from "../Assets/ANSADM/logo_cropped_ansa.png"
const Home = () => {
  return (
    <div className="home">
      <div className="common">
        <div className="imagediv">
          <img src={ansers_log} />
        </div>
      </div>
      <div className="common">
        <div className="imagediv">
          <img src={komvos_logo} />
        </div>
      </div>
      <div className="common">
        <div className="imagediv">
          <img src={spderm_logo} />
        </div>
      </div>
      <div className="common">
        <div className="imagediv">
          <img src={ansers_log} />
        </div>
      </div>
    </div>
  );
}

export default Home
