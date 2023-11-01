import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SoundComponent from "./Sound";

export default function Letter() {

  const [isPlaying, setIsPlaying] = useState(false);

  function handleToggle() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="test-container">
      
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        onClick={handleToggle}
      />

      {!isPlaying && (
        <>
          <label htmlFor="toggle" className="title">
            Why is it so dark here?
          </label>
          <label htmlFor="toggle" className="title">
            Turn up the light.
          </label>
        </>
      )}

      <div className="background">
        {isPlaying && (
          <div style={{padding : '5%'}}>
            <TypeAnimation
              sequence={[
                "One", // Types 'One'
                1000, // Waits 1s
                "Two", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Two Three", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                fontFamily: "Dancing Script",
              }}
              speed={30}
            />
            <SoundComponent/>
          </div>
        )}
      </div>
     </div>
  );
}
