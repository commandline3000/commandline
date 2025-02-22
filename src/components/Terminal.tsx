import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";

type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", desc: "strategy", tab: 8 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "email", desc: "email us", tab: 8 },
  { cmd: "help", desc: "available commands", tab: 9 },
  { cmd: "projects", desc: "view our projects", tab: 5 },
  { cmd: "welcome", desc: "display hero", tab: 6 },
  { cmd: "ballers", desc: "ir, early access", tab: 6 },
  { cmd: "talent", desc: "join us", tab: 7 },
  { cmd: "malaga", desc: "málaga hub", tab: 7 },
];

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  clearHistory?: () => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
});

const Terminal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCmdHistory([inputVal, ...cmdHistory]);
    setInputVal("");
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  // Focus input on container click
  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // Tab or Ctrl+I for autocomplete
    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) {
          hintsCmds.push(cmd);
        }
      });

      const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
      hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

      if (hintsCmds.length > 1) {
        setHints(hintsCmds);
      } else if (hintsCmds.length === 1) {
        const currentCmd = _.split(inputVal, " ");
        setInputVal(
          currentCmd.length !== 1
            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
            : hintsCmds[0]
        );
        setHints([]);
      }
    }

    // Ctrl+L to clear
    if (ctrlL) {
      clearHistory();
    }

    // Arrow Up
    if (e.key === "ArrowUp") {
      if (pointer + 1 < cmdHistory.length) {
        setInputVal(cmdHistory[pointer + 1]);
        setPointer(prev => prev + 1);
        inputRef?.current?.blur();
      }
    }

    // Arrow Down
    if (e.key === "ArrowDown") {
      if (pointer >= 0) {
        if (pointer === 0) {
          setInputVal("");
          setPointer(-1);
          return;
        }
        setInputVal(cmdHistory[pointer - 1]);
        setPointer(prev => prev - 1);
        inputRef?.current?.blur();
      }
    }
  };

  useEffect(() => {
    // Keep input focused
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, inputVal, pointer]);

  return (
    <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
      {/* Circles from reference */}
      <div className="circle-container">
        <div id="circle1" className="circle"></div>
        <div id="circle2" className="circle"></div>
        <div id="circle3" className="circle"></div>
      </div>

      {/* Autocomplete Hints */}
      {hints.length > 1 && (
        <div>
          {hints.map(hCmd => (
            <Hints key={hCmd}>{hCmd}</Hints>
          ))}
        </div>
      )}

      {/* Input Form */}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="terminal-input">
          <TermInfo />
          <MobileBr />
          <MobileSpan>&#62;</MobileSpan>
        </label>
        <Input
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={inputVal}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </Form>

      {/* Command History Output */}
      {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        const contextValue = {
          arg: _.drop(commandArray),
          history: cmdHistory,
          rerender,
          index,
          clearHistory,
        };

        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div>
              <TermInfo />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span data-testid="input-command">{cmdH}</span>
            </div>
            {validCommand ? (
              <termContext.Provider value={contextValue}>
                <Output index={index} cmd={commandArray[0]} />
              </termContext.Provider>
            ) : cmdH === "" ? (
              <Empty />
            ) : (
              <CmdNotFound data-testid={`not-found-${index}`}>
                command not found: {cmdH}
              </CmdNotFound>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Terminal;
