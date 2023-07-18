import { createRoot, createSignal } from 'solid-js';

function createAnimationDuration() {
  const [duration, setDuration] = createSignal('3s');

  const set = (value: number) => setDuration(`${value}s`);

  return { get: duration, set };
}

export const animationDuration = createRoot(createAnimationDuration);
