import React,{useRef,useState} from "react";
import { connect } from "react-redux";
import * as Styled from "./styled";
import {getAudioChunks} from '../../../redux/selectors';
import { AddChunkBtn } from "./AddChunkBtn";
import ChunkTitle from './ChunkTitle'

function SubtitleSideBar(props){
    const {audioChunks} = props;
    const [chunks,setChunks] = useState([
      ...audioChunks,
      
    ]);

    return (
            <Styled.Subtitle>
              {
                chunks.map((chunk)=>{
                  return(
                    <ChunkTitle chunk= {chunk}/>
                  )
                })
              }
                <AddChunkBtn/>
            </Styled.Subtitle>
    )
}

const mapStateToProps = (state) => ({
    audioChunks: getAudioChunks(state),
  });
export default connect(mapStateToProps)(SubtitleSideBar);