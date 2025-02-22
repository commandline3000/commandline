import {
  Cmd,
  HeroContainer,
  Link,

  PreWrapper,
  
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
      <div>
        <Link href="https://github.com/satnaing/terminal-portfolio">
        Credits: @satnaing you absolute legend
        <br /><br />

        </Link>
        </div>

        <PreWrapper>

        </PreWrapper>


        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">

      </div>
    </HeroContainer>
  );
};

export default Welcome;
