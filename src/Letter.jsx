import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SoundComponent from "./Sound";

export default function Letter() {

  // const intro = "Don"
  const seq1 = "You meet this one person and your life is changed..."
  const seq2 = seq1 +" FOREVER. "
  const seq3 = seq2 + "You have this aura, this profound energy that lights up everyplace you walk into. "
  const seq4 = seq3 + "The ‘S’  symbol on superman’s chest symbolises hope on the planet Krypton."
  const seq5 = seq4+ " Well, here on planet Earth.."
  const seq6 = seq5 + " i think it has to be "
  const seq7 = seq6 + "Alpana"
  const seq8 = seq6 + "Alpzzz"
  const seq9 = seq6 + "Lisu ❤️ "
  const seq10 = seq9 + "Oh well, it is all the same to me 😉"
  const seq11 = seq10 + "\n\n"
  const intro_sequcne = [1000,seq1,2000,seq2,1000,seq3,1000,seq4,1300,seq5,1500,seq6,1000,seq7,1000,seq8,1000,seq9,1000,seq10,1000,seq11]





  const [isPlaying, setIsPlaying] = useState(false);

  function handleToggle() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="theme-container">
      
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
            Let's turn up the light.
          </label>
        </>
      )}

      <div className="background">
        {isPlaying && (
          <div style={{padding : '5%'}}>
            <TypeAnimation
              sequence={intro_sequcne}
              wrapper="span"
              cursor={true}
              speed={30}
              className="automatic-typing"
            />
            <SoundComponent/>
          </div>
        )}
      </div>
     </div>
  );
}
