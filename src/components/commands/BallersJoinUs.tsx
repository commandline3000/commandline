// src/commands/BallersJoinUs.tsx
import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const BallersJoinUs: React.FC = () => {
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const content = `
    <br />
    <p>
      We’re not looking for <strong>investment 💰</strong> — we want your <strong>network</strong> and your knowledge.
    </p>
    <br />
    <p>
      Get early access & compare our model against other high-growth projects you’re evaluating.
    </p>
    <br />
    <p>
      If based & experienced, <strong>DM us</strong> or <a href="https://seed-goal-f35.notion.site/1a07dfd70862818db9cbd26cf404d5a0?pvs=105" target="_blank" rel="noopener noreferrer">fill this 10 second form</a> then we hop a flight ✈️, come show you our tooling in person.
    </p>
    <br />
  `;

  return (
    <div data-testid="ballers-join-us">
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

export default BallersJoinUs;
