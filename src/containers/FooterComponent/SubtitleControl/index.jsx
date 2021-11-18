import * as Styled from "./styled";
import { Chunk } from "./Chunk";
import { connect } from "react-redux";
import { getAudioChunks } from "../../../redux/selectors";


function SubtitleControl(props) {
  const { audioChunks } = props;


  return (
    <Styled.SubtitleControl>
    {
        audioChunks.map((chunk)=>{
            return ( 
                <Chunk chunk = {chunk} />
            )
        })
    }
      
    </Styled.SubtitleControl>
  );
}
const mapStateToProps = (state) => ({
  audioChunks: getAudioChunks(state),
});
export default connect(mapStateToProps)(SubtitleControl);
