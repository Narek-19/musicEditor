import React from "react";
import * as Styled from "./styled";

export function ChunkTitle(props) {
  const { obj } = props;
  return (
    <Styled.ChunkTitle>
      <p>{obj.id}</p>
      <label>
        <Styled.span>Start</Styled.span>
        <Styled.input value={obj.start}></Styled.input>
        <br />
      </label>
      <label>
        <Styled.span>End</Styled.span>
        <Styled.input value={obj.end}></Styled.input>
        <br />
      </label>
      <label>
        <Styled.span>Title</Styled.span>
        <Styled.input value={obj.textParams.text}></Styled.input>
        <br />
      </label>
    
    </Styled.ChunkTitle>

  );
}
