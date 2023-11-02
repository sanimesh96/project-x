import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SoundComponent from "./Sound";

export default function Letter() {

  // const intro = "Don"

  const intro1 = "My Dearest Dhanuuuuuuu, \n Happpppppppyyyyyyy Birthdayyyyyyy!!!!!!!\n\n"

  const seq1 = intro1 + "You meet this one person and your life is changed..."
  const seq2 = seq1 +" FOREVER. "
  const seq3 = seq2 + "You have this aura, this profound energy that lights up everyplace you walk into. "
  const seq4 = seq3 + "The ‘S’  symbol on superman’s chest symbolises hope on the planet Krypton."
  const seq5 = seq4 + " Well, here on planet Earth.."
  const seq6 = seq5 + " i think it has to be "
  const seq7 = seq6 + "Alpana"
  const seq8 = seq6 + "Alpzzz"
  const seq9 = seq6 + "Lisu ❤️ "
  const seq10 = seq9 + "Oh well, it is all the same to me 😉"
  const seq11 = seq10 + "\n\n"
  let sequence = [1000,intro1,1000,seq1,2000,seq2,1000,seq3,1000,seq4,1300,seq5,1500,seq6,1000,seq7,1000,seq8,1000,seq9,1000,seq10,1000,seq11]


  const p_seq1 = seq11 + "You are smart, pretty, tenacious, kind, loving and caring. "
  const p_seq2 = p_seq1 + "You are beautiful inside and out. "
  const p_seq3 = p_seq2 + "You are ambitious, easy-going and most importantly, you have the innocence of a baby."
  const p_seq4 = p_seq3 + " Yes, you are.. "
  const p_seq5 = p_seq4 + "sexy too :P"
  const p_seq6 = p_seq5 + " Dont get me wrong, just because I don’t say it often doesn’t mean I have forgotten about all of the things that you are. "
  const p_seq7 = p_seq6 + "You have come such a long way since i got to know you. "
  const p_seq8 = p_seq7 + "And i am so proud of the beautiful Woman that you have become. "
  const p_seq9 = p_seq8 + "\n\n"
  let p_sequence = [1000, p_seq1,1000,p_seq2,1000,p_seq3,1000,p_seq4, 1500, p_seq5,1000, p_seq6,1000,p_seq7,1000,p_seq8,1000,p_seq9]
  sequence=sequence.concat(p_sequence);


  const sen21 = p_seq9 + "I hope you acheieve all the things that you have ever wished to do. "
  const sen22 = sen21 + "Don't worry.. "
  const sen23 = sen22 + "I will be there right by your side. "
  const sen24 = sen23 + "No matter where i am, you will always have a place in my heart. I Promise i will give it my best everytime to keep you happy. "
  const sen25 = sen24 + "NO. "
  const sen26 = sen25 + "MATTER. "
  const sen27 = sen26 + "WHAT. \n\n"
  const sen28 = sen27 + "Love,\nDino.\n\n"
  const sen29 = sen28 + "(PS : I know i am not there with you right now but i will there the next year. This is just my way of making you feel special, even if im not there beside you, i really have to keep the standards high or else i wont be your dino anymore ;). A lot of effort went into this xD, i reallly hope you like this.)\n\n"
  const sen30 = sen29 + "(PPS : I know bahut kharap lekhichi letter ta but coding trust me top tier ra heichi xD)"
  let outro = [1500,sen21,1000,sen22,1000,sen23,1000,sen24,1000,sen25,1200,sen26,1200,sen27,1500,sen28,1700,sen29,1000,sen30]

  sequence = sequence.concat(outro)

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
              sequence={sequence}
              wrapper="div"
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
