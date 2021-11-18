import styled from "styled-components";

export const Chunk = styled.div`
    width:25%;
    border-bottom:5px solid #0c5b5b;
    height: 100%;
    background-color:#008B8B;
    position:absolute;
    left:${(props)=>props.start}%;
`
