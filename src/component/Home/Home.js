import React from 'react'
import "./Home.css"

import Mrm from '../MRM/Mrm'
import Spdrm from '../SPDRM/Spdrm'
import Ansers from '../ANSERS/Ansers'
import Komvos from '../KOMVOS/Komvos'
const Home = () => {
  return (
    <div className="home">
      <div className="firstROw">
        <Mrm />
        <Ansers />
      </div>
      <div className="firstROw">
        <Komvos />

        <Spdrm />
      </div>
    </div>
  );
}

export default Home
