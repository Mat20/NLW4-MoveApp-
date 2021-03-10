import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
  minutes: number;
  second: number;
  hashFinished: boolean;
  isActive: boolean;
  resetCountDown: () => void;
  startCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode; 
}

export const CountDownContext = createContext({} as CountDownContextData)

let CountDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps ) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(10 * 60)
  const [isActive, setIsActive] = useState(false);
  const [hashFinished, setHashFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const second = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(CountDownTimeout);
    setIsActive(false);
    setTime(10* 60);
    setHashFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      CountDownTimeout = setTimeout(() => {
       setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHashFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <CountDownContext.Provider value={{
      minutes,
      second,
      hashFinished,
      isActive,
      resetCountDown,
      startCountDown,
    }}>
      {children}
    </CountDownContext.Provider>
  );
}


