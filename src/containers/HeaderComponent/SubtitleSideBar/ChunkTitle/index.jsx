import React, { useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import * as Styled from "./styled";
import { setChunk } from "../../../../redux/actions/action";

const ChunkTitle = (props) => {
  const { chunk, setChunk } = props;

  const [start, setStart] = useState(chunk.start);
  const [end, setEnd] = useState(chunk.end);
  const [title, setTitle] = useState(chunk.textParams.text);

  const changeEnd = (e) => {
    setEnd(e.target.value);
  };
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Styled.ChunkTitle>
      <p>{chunk.id}</p>
      <label>
        <Styled.span>Start</Styled.span>
        <Styled.input value={start}></Styled.input>
        <br />
      </label>
      <label>
        <Styled.span>End</Styled.span>
        <Styled.input value={end} onChange={changeEnd}></Styled.input>
        <br />
      </label>
      <label>
        <Styled.span>Title</Styled.span>
        <Styled.input value={title} onChange={changeTitle}></Styled.input>
        <br />
      </label>
    </Styled.ChunkTitle>
  );
};

export default connect(null, { setChunk })(ChunkTitle);
