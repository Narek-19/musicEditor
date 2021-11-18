import styled from "styled-components";

export const TimeLine = styled.div`
    width:100%;
    height:30px;
    background-color: #2e8cd6;
`
export const progress = styled.div`
    width: ${(props)=>props.width}%;
    height:100%;
    background-color: #1d6aa6;
`