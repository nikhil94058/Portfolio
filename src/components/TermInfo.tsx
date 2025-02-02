import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>PS : </User>@<WebsiteName>C:\Users\Hp</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
