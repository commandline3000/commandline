// src/commands/Welcome.tsx
import React from "react";
import { HeroContainer } from "../styles/Welcome.styled";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const Welcome: React.FC = () => {
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const content = `
    <div class="info-section">
      <div></div>
      <div class="pre-wrapper">
     
      </div>
      <div>
        For a list of available commands, type <code><span class="cmd">help</span></code>.
      </div>
    </div>
  `;

  return (
    <HeroContainer data-testid="welcome">
      <Typewriter
        options={{
          loop: false,
          delay: 75,
          cursor: "",
          skipAddStyles: true,
          stringSplitter: stringSplitter as unknown as (text: string) => string,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(content).start();
        }}
      />
    </HeroContainer>
  );
};

export default Welcome;
