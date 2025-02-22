import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>based</User>@<WebsiteName>commandline.cloud</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
