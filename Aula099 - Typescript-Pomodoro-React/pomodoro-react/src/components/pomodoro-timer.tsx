import React, { useEffect } from 'react';
import { useInterval } from '../hook/use-interval';
import { Button } from './button';
//eslint-disable-next-line
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from './timer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioFinishWorking = new Audio(bellFinish);

interface Props {
  pomodoroTimer: number;
  shortRestTime: number;
  LongRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTimer);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1); // mainTime sempre vai ser 1 segundo
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTimer);
    audioStartWorking.play();
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.LongRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }

    audioFinishWorking.play();
  };

  return (
    <div className="pomodoro">
      <h2>You are: WORKING</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureRest(false)}></Button>
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>
      <div className="details">
        <p>
          Testando: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quibusdam eaque
          quis harum autem inventore officia iusto dicta voluptates laborum dolores. Repudiandae
          optio iste facilis eum ipsum porro consequatur consequuntur!
        </p>
        <p>
          Testando: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quibusdam eaque
          quis harum autem inventore officia iusto dicta voluptates laborum dolores. Repudiandae
          optio iste facilis eum ipsum porro consequatur consequuntur!
        </p>
      </div>
    </div>
  );
}
