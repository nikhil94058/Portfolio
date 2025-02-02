import { useContext, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";
const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  useEffect(() => {
    /* ===== get current command ===== */
    const currentCommand = _.split(history[0], " ");

    if (
      rerender &&
      currentCommand[0] === "email" &&
      currentCommand.length <= 1
    ) {
      window.location.href = "mailto:nikhild.ug22.cs@nitp.ac.in";
    }
  }, [history, rerender]);

  return (
    <Wrapper>
      <span>
        <PreName>
          {`
          ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
          ╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
             ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
             ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
             ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
             ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝ 
                                                                                    
          `}
        </PreName>
        Opening Email ...... Sender address added : "nikhild.ug22.cs@nitp.ac.in"{" "}
        <br />
        We will reach you ⊂(◉‿◉)つ
      </span>
    </Wrapper>
  );
};

export default Email;
