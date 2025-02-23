// src/commands/Projects.tsx
import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const Projects: React.FC = () => {
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const content = `
    <br />
    <p>
      We’re building a decentralized agentic platform on <strong>Base</strong> that combines <strong>AI-powered automation</strong> with decentralized asset management. Our platform initially focuses on <strong>meme coins</strong> and <strong>NFTs</strong>, but we’re laying the groundwork for <strong>real-world asset (RWA) tokenization</strong>.
    </p>
    <br />
    <p>
      With <strong>Base’s low fees</strong> and <strong>scalability</strong>, we’re positioning ourselves to offer the most user-friendly and efficient decentralized asset management platform. As demand grows, we’ll also incorporate additional chains to ensure a seamless multi-chain experience.
    </p>
    <br />
    <p>
      If you're ready to be part of the future of decentralized asset management, <a href="https://seed-goal-f35.notion.site/19f7dfd7086281eb996fe8c40397287e" target="_blank" rel="noopener noreferrer">join us</a> and get early access. We’re moving fast—are you?
    </p>
    <br />
  `;

  return (
    <div data-testid="projects">
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
    </div>
  );
};

export default Projects;
