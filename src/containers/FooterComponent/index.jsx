import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import Controls from "./Controls";
import TimeLine from "./TimeLine";
import SubtitleControl from "./SubtitleControl";
import { connect } from "react-redux";
import { getAudioChunks, getAudioUrl } from "../../redux/selectors";

function Footer(props) {
  const { audioUrl } = props;


  const audioRef = useRef(null);

  return (
    <>
      <Styled.Footer>
        <audio src={audioUrl} ref={audioRef}></audio>
        <Controls audio={audioRef}/>
        <TimeLine
          audioMusic={audioRef}
        />
        <SubtitleControl  />
      </Styled.Footer>
    </>
  );
}
const mapStateToProps = (state) => ({
  audioUrl: getAudioUrl(state),
  audioChunks: getAudioChunks(state),
});
export default connect(mapStateToProps)(Footer);
