// src/commands/About.tsx
import React from "react";
import { AboutWrapper } from "../styles/About.styled";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const About: React.FC = () => {
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const content = `
    <p>
      We’re building the next-generation decentralized platform on Base, powered by AI to automate content creation, market analysis, and the management of both digital and real-world assets (RWA).
    </p>
    <br />
    <p>
      Starting with meme coins and NFTs, we provide a marketplace and community where creators and traders thrive. But we’re not stopping there — our ultimate goal is to bring RWA tokenization to the blockchain, creating new decentralized solutions for everyday assets.
    </p>
    <br />
    <p>
      Our compact team of CS and ML engineers is a dynamic, fast-moving group from the USA, Europe, Australia, India, Thailand, Eastern Europe, and New Zealand. As digital nomads, we occasionally converge in Málaga, Spain, for team-building events, conferences, and other opportunities to stay connected and foster collaboration.
    </p>
    <br />
    <p>
      On Base, we’re automating everything from AI meme coin creation to AI-driven market insights and real-time moderation. Whether you're minting your first token or managing a complex portfolio, we’re here to help you make calculated, high-speed decisions and optimize your asset management.
    </p>
    <br />
    <p>
      Our agentic network allows users to control their assets autonomously through intelligent agents, making it easier and safer to navigate the digital asset landscape.
    </p>
    <br />
    <p>
      Want to know more? <a href="https://seed-goal-f35.notion.site/1a07dfd70862818db9cbd26cf404d5a0?pvs=105" target="_blank" rel="noopener noreferrer">Jump in</a> and help us lead the charge for agentic decentralized finance.
    </p>
  `;

  return (
    <AboutWrapper data-testid="about">
      <Typewriter
        options={{
          loop: false,
          delay: 5,
          cursor: "",
          skipAddStyles: true,
          stringSplitter: stringSplitter as unknown as (text: string) => string,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(content).start();
        }}
      />
    </AboutWrapper>
  );
};

export default About;
