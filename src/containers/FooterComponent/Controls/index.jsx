import * as Styled from './styled.js'
import PlayerBtn from "./PlayerBtn";
import TimeSet from "./TimeSet";
function Controls(props){
    return(
        <Styled.Controls>
            <PlayerBtn audio = {props.audio} setTime = {props.setTime} setDuration = {props.setDuration}/>
            <TimeSet/>
        </Styled.Controls>
    )
}
export default Controls;