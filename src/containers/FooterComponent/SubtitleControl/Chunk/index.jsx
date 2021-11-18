import React, { useRef } from "react";
import * as Styled from "./styled";

export function Chunk(props) {
  const { chunk } = props;
  const start = chunk.start;



  return <Styled.Chunk start={start}>{chunk.id}</Styled.Chunk>;
}

