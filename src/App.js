import React, { useEffect, useState } from "react";
import logo from "./Sun.jpeg"
import shal from "./Shally.jpeg"

export default function App() {
  const [speed, setSpeed] = useState(50)
  const [disko, setDisko] = useState(false)
  return <div className="App">
    <img style={disko ? {opacity: speed/100, animation: "disko 1s linear infinity"} : {opacity: speed/100}} src={shal} className="background"/>
    <img style={{opacity: speed/100}} src={shal} className="background"/>
    <div className="controllers">
      <input type="range" onChange={e => {
        setSpeed(e.target.value)
      }} value={speed} />
      <p>{speed}</p>
    </div>
    <div>
      <img style={{animation: `spin ${50/speed}s linear infinite`}} alt="img" src={logo} className="image"/>
    </div>
  </div>
}
