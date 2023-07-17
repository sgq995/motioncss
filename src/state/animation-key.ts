import { createRoot, createSignal } from 'solid-js';
import type { AnimationKey } from '../model/keyframes';

function createAnimationKeyState() {
  const [key, setKey] = createSignal<AnimationKey>('from');

  return { get: key, set: setKey };
}

export const animationKey = createRoot(createAnimationKeyState);
