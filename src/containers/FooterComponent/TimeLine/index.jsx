import React, {useState,useRef} from "react";
import * as Styled from "./styled.js";

function TimeLine(props) {
  const [progress, setProgress] = useState(0);
  const progressBar = useRef(null);



  const { audioMusic } = props;

  const setNewPoint= (e) => {
    const marginLeft = progressBar.current.offsetLeft;
    const clientWidth = progressBar.current.clientWidth;

    const start = e.clientX - marginLeft; 
    const total = clientWidth;


    audioMusic.current.currentTime = (start * 100 ) / total;
    audioMusic.current.ontimeupdate = () => {
      setProgress((start * 100 ) / total); 
      
    };
  }
  

  return (
      <Styled.TimeLine ref = {progressBar} onClick = {setNewPoint}
        value={progress}
      >
        <Styled.progress width = {progress}></Styled.progress>

      </Styled.TimeLine>
  );
}
export default TimeLine;
