import React from "react";

const SanityAudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
  return (
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default SanityAudioPlayer;
