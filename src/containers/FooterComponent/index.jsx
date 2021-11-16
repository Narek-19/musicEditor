import * as Styled from "./styled"
import Controls from "./Controls";
import TimeLine from "./TimeLine";
import  SubtitleControl  from "./SubtitleControl";
function Footer(){
    return(
        <>
            <Styled.Footer>
                <Controls/>
                <TimeLine/>
                <SubtitleControl/>
            </Styled.Footer>
        </>
    )
}
export default Footer;