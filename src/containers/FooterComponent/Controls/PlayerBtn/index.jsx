import React, { useState, useEffect } from "react";
import * as Styled from "./styled.js";

function PlayerBtn(props) {
  const { audio } = props;
  // const { setProgress } = props;

  const playAudio = () => {
    if (audio) {
      audio.current.play();
      // audio.current.ontimeupdate = () => {
      //   setProgress(audio.current.currentTime);
      // };
      
    }
  };

  return <Styled.PlayerBtn onClick={playAudio}></Styled.PlayerBtn>;
}

export default PlayerBtn;
