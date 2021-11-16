import React, { useState, useEffect } from "react";
import * as Styled from "./styled.js";
import { getAudioUrl } from "../../../../redux/selectors/index.js";

import { connect } from "react-redux";

function PlayerBtn(props) {

  const { audioUrl} = props;


  const playBtn = <img src="./icons/play-button.png" />;
  const pauseBtn = <img src="./icons/pause-button.png" />;

  const useAudio = () => {
    const [audio] = useState(new Audio(audioUrl));

    console.log(audio.currentTime); 

    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
 
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);
    return [playing, toggle];
  };
  const [playing, toggle] = useAudio();

  return (
      
    <>
      <Styled.PlayerBtn onClick={toggle}>
        {playing ? pauseBtn : playBtn}
        
      </Styled.PlayerBtn>
    </>
  );
}

const mapStateToProps = (state) => ({
  audioUrl: getAudioUrl(state),
});
export default connect(mapStateToProps,null)(PlayerBtn);
