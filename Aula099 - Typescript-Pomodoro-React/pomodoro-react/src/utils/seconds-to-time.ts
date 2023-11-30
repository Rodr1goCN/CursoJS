export function secondsToTime(seconds: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0'); // padstart(2, '0) são duas casas decimais e quando não tiver duas casas, ele começa pelo zero
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
