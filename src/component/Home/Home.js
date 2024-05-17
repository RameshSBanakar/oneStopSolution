import React from 'react'
import "./Home.css"

import Mrm from '../MRM/Mrm'
import Spdrm from '../SPDRM/Spdrm'
import Ansers from '../ANSERS/Ansers'
import Komvos from '../KOMVOS/Komvos'
import Pdm from '../PDM/Pdm'
import Ml from '../ML/Ml'
import Conference from '../CONFERENCE/Conference'
const Home = () => {
  return (
    <div className="home">
      <div className="firstROw">
        <Mrm />
        <Ansers />
        <Pdm />
        {/* <Conference/> */}
      </div>
      <div className="firstROw">
        <Komvos />

        <Spdrm />
        <Ml/>
      </div>
    </div>
  );
}

export default Home
