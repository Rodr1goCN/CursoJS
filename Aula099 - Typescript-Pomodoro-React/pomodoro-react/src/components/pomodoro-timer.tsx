import React from 'react';
import { useInterval } from '../hook/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1); // mainTime sempre vai ser 1 segundo
  }, 1000);

  return <div> olá mundão {secondsToTime(mainTime)}</div>;
}
