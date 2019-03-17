import { useEffect, useRef, useState } from 'react';

export type TimerType = 'DECREMENTAL' | 'INCREMENTAL';

export interface IConfig {
  endTime: number;
  initialTime: number;
  interval: number;
  timerType: TimerType;
  step: number;
}

export interface IValues {
  pause: () => void;
  reset: () => void;
  start: () => void;
  time: number;
}

const initialConfig: IConfig = {
  endTime: 0,
  initialTime: 0,
  interval: 1000,
  timerType: 'INCREMENTAL',
  step: 1
};

export const useTimer = (config: Partial<IConfig> = initialConfig): IValues => {
  const { endTime, initialTime, interval, timerType, step } = {
    ...initialConfig,
    ...config
  };
  let intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [time, setTime] = useState(initialTime);

  const [a, setA] = useState(10);
  setTimeout(() => {
    setA(2);
  }, 1000);
  setTimeout(() => {
    setTime(2);
  }, 4000);

  const cancelTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const createTimeout = () => {
    setTimeout(cancelTimer, endTime * interval);
  };

  const createTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime(previousTime =>
        timerType === 'INCREMENTAL' ? previousTime + step : previousTime - step
      );
    }, interval);
  };

  const pause = () => {
    cancelTimer();
  };

  const reset = () => {
    cancelTimer();
    setTime(initialTime);
  };

  const start = () => {
    if (intervalRef.current === null) {
      createTimer();
    }
    if (endTime > 0) {
      createTimeout();
    }
  };

  useEffect(() => {
    console.log(intervalRef);
    return cancelTimer;
  }, []);

  return { time, start, pause, reset };
};
