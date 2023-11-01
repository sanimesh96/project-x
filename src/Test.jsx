import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SoundComponent from "./Sound";

export default function Test() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleToggle() {
    setIsPlaying(true);
  }

  return (
    <div className="test-container">
      <input
        id="toggle"
        class="toggle"
        type="checkbox"
        onClick={handleToggle}
      />
      <div class="background">
        {isPlaying && (
          <>
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
                fontSize: "2em",
                display: "inline-block",
                fontFamily: "Tangerine",
              }}
              speed={30}
            />
            <SoundComponent isPlaying={isPlaying} />
          </>
        )}
      </div>
    </div>
  );
}
