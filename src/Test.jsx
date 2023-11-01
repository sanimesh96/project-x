import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SoundComponent from "./Sound";

export default function Test() {
  const [isPlaying, setIsPlaying] = useState(false);
  const para = "Climate change is one of the most pressing challenges facing humanity today. The increasing levels of greenhouse gases in the atmosphere are causing global temperatures to rise, leading to a wide range of environmental and societal impacts. As the planet warms, we're witnessing more frequent and severe weather events, rising sea levels, and disruptions to ecosystems. Addressing climate change requires a global effort to reduce emissions, transition to clean energy sources, and adopt sustainable practices.Environmental conservation plays a crucial role in mitigating these issues. Protecting natural habitats, conserving biodiversity, and promoting sustainable land use are essential strategies. Conservation efforts extend to both terrestrial and marine ecosystems, as they are interconnected. Initiatives such as reforestation, wildlife protection, and the preservation of critical ecosystems like rainforests and coral reefs are fundamental in safeguarding the planet's health."

  return (
    <div
      style={{ padding: "5%" }}
      onClick={() => {
        setIsPlaying(true);
      }}
    >
      {!isPlaying ? (
        <div style={{display : 'flex', justifyContent: 'center', alignItems : 'center', height : "60vh"}}>Press Anywhere to play</div>
      ) : (
        <>
          <TypeAnimation
            sequence={[
              "One", // Types 'One'
              1000, // Waits 1s
              "Two", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Two Three", // Types 'Three' without deleting 'Two'
              para
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
  );
}
