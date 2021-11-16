import * as Styled from './styled.js'
import PlayerBtn from "./PlayerBtn";
import TimeSet from "./TimeSet";
function Controls(){
    return(
        <>
        <Styled.Controls>
            <PlayerBtn/>
            <TimeSet/>
        </Styled.Controls>
        </>
    )
}
export default Controls;