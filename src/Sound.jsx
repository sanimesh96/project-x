import Sound from 'react-sound';
import React, {useState,useEffect} from 'react';
import interStellarSong from './Interstellar-Theme.mp3'

export default function SoundComponent ({isPlaying}) {

  return (
    <>
      {isPlaying && <Sound url={interStellarSong} playStatus={isPlaying ? Sound.status.PLAYING : "PAUSED"} playFromPosition={20000} />}
    </>
  );
};