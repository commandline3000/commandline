import {
  Cmd,
  HeroContainer,


  PreWrapper,
  
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
      <div>

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
