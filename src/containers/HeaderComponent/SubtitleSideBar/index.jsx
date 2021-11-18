import React from "react";
import { connect } from "react-redux";
import * as Styled from "./styled";
import {getAudioChunks} from '../../../redux/selectors';
import { ChunkTitle } from "./ChunkTitle";
import { AddChunkBtn } from "./AddChunkBtn";


function Subtitle(props){
    const {audioChunks} = props;
    
    return (
            <Styled.Subtitle>
              {
                audioChunks.map((obj)=>{
                  return(
                    <ChunkTitle obj = {obj}/>
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
export default connect(mapStateToProps)(Subtitle);