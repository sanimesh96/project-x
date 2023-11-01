import React, { useEffect } from "react";
import interStellarSong from "./Interstellar-Theme.mp3";

export default function SoundComponent() {

  useEffect(() => {
    const audioElement = document.getElementById("soundplayer");
    audioElement.play();
    audioElement.currentTime = 30;
  },[])

  return (
    <>
      <audio src={interStellarSong} id  = "soundplayer" />
    </>
  );
}
