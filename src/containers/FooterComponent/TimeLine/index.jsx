import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./styled.js";

function TimeLine(props) {
  const [progress,setProgress] = useState(0);
  const progressBar = useRef(null);
  const { audioMusic } = props;

useEffect(()=>{
  audioMusic.current.ontimeupdate = () => {
    const start = audioMusic.current.currentTime
    console.log(start);
    setProgress(start);
  };
},[])
    

  const setNewPoint = (e) => {
    const marginLeft = progressBar.current.offsetLeft;
    const clientWidth = progressBar.current.clientWidth;

    const start = e.clientX - marginLeft;
    const total = clientWidth;
    audioMusic.current.currentTime = (start * 100) / total;
  };



  return(
    <Styled.TimeLine ref={progressBar} onClick={setNewPoint}>
      <Styled.progress  progress={progress}></Styled.progress>
    </Styled.TimeLine>
  );
}
export default TimeLine;
