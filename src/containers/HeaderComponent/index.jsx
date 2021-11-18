import * as Styled from "./styled";
import Display from "./DisplayComponent";
import LeftSideBar from "./LeftSideBar";
import Subtitle from "./SubtitleSideBar";
function Header() {
  return (
      <Styled.Header>
        <LeftSideBar />
        <Display />
        <Subtitle />
      </Styled.Header>
  );
}
export default Header;
