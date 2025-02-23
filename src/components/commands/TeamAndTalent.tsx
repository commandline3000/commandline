// src/commands/TeamAndTalent.tsx
import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const TeamAndTalent: React.FC = () => {
  const stringSplitter = (text: string): string[] => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  const content = `
    <br />
    <p>
      We’re looking for visionary pioneers who can keep up with the pace of innovation. Our team is built on a culture of speed and accountability. Like the teams at <strong>Tesla</strong>, <strong>Grok</strong>, and <strong>SpaceX</strong>, we expect you to move quickly, take ownership, and embrace calculated risks.
    </p>
    <br />
    <p>
      If you thrive on relentless innovation, rapid delivery, and the ability to make decisive, high-stakes decisions, we want you on our team. If you’re interested in joining us in <strong>Málaga</strong> or working remotely, we’re actively recruiting for:
    </p>
    <br />
    <ul>
      <li>- AI Engineers</li>
      <li>- Blockchain Developers</li>
      <li>- Market Analysts</li>
      <li>- Testers</li>
      <li>- Designers</li>
    </ul>
    <br />
    <p>
      We’re a dynamic, fast-moving group, and we value self-starters who don't need hand-holding, but bring competence and innovation to every task.
    </p>
    <br />
    <p>
      <a href="https://seed-goal-f35.notion.site/1a07dfd70862812d8585ce29fde30ea5?pvs=105" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </p>
    <br />
  `;

  return (
    <div data-testid="team-and-talent">
      <Typewriter
        options={{
          loop: false,
          delay: 75,
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

export default TeamAndTalent;
