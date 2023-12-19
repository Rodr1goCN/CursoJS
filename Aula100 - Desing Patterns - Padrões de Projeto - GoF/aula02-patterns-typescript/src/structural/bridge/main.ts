import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // True

  //Type Guard
  // Se o volumeUp NÃO existir em abstraction, ele retorna
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeUp(); // 40
  abstraction.volumeDown(); // 30
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);

console.log();
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
