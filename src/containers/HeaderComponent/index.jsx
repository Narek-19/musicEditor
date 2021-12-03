import * as Styled from "./styled";
import Display from "./DisplayComponent";
import LeftSideBar from "./LeftSideBar";
import SubtitleSideBar from "./SubtitleSideBar";
function Header() {
  return (
      <Styled.Header>
        <LeftSideBar />
        <Display />
        <SubtitleSideBar />
      </Styled.Header>
  );
}
export default Header;
