// TypedContent.tsx
import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const TypedContent: React.FC = () => {
  // Use GraphemeSplitter to correctly handle complex characters like emoji.
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  return (
    <div>
      <Typewriter
        options={{
          loop: true,
          delay: 75, // Adjust this value to control the typing speed.
          // Cast our splitter function to satisfy the expected type.
          stringSplitter: stringSplitter as unknown as (text: string) => string,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString("🌷A simple yet powerful native javascript")
            .pauseFor(300)
            .deleteChars(10)
            .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
            .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
};

export default TypedContent;
