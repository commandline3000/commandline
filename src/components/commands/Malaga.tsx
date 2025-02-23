// src/commands/Malaga.tsx
import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const Malaga: React.FC = () => {
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const content = `
    <br />
    <p>
      <strong>Málaga</strong> is more than just our virtual headquarters; it’s a <strong>hub of innovation</strong> at the heart of Europe’s growing <strong>blockchain</strong> and <strong>AI</strong> ecosystem. Málaga’s <strong>central location</strong> and <strong>global connectivity</strong> make it the perfect place for these in-person nomad gatherings, providing a great balance of <strong>tech innovation</strong> and <strong>sunshine</strong> — with <strong>300+ days of sunshine</strong> each year.
    </p>
    <br />
    <p>
      The city offers a relaxed lifestyle, excellent international connections, and a thriving <strong>startup culture</strong> that makes it an ideal place to build the future of decentralized finance.
    </p>
    <br />
    <p>
      Join us each month at <strong>Málaga Tech Meetups</strong> to connect with other innovators in <strong>blockchain</strong>, <strong>AI</strong>, and <strong>decentralized finance</strong>. Let’s push the boundaries of what’s possible.
    </p>
    <br />
  `;

  return (
    <div data-testid="malaga">
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

export default Malaga;
