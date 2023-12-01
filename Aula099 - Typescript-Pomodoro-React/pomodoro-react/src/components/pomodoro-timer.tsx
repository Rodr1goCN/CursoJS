import React from 'react';
import { useInterval } from '../hook/use-interval';
import { Button } from './button';
//eslint-disable-next-line
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from './timer';

interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1); // mainTime sempre vai ser 1 segundo
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log(1)}></Button>
    </div>
  );
}
