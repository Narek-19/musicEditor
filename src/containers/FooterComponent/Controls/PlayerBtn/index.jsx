import React, { useState, useEffect } from "react";
import * as Styled from "./styled.js";

function PlayerBtn(props) {
  const { audio } = props;

  const playAudio = () => {
    if (audio) {
      audio.current.play();
    }
  };

  return <Styled.PlayerBtn onClick={playAudio}></Styled.PlayerBtn>;
}

export default PlayerBtn;
