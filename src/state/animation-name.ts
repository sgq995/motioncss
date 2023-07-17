import { createRoot, createSignal } from 'solid-js';

function createAnimationName() {
  const [name, setName] = createSignal('animation');

  return { get: name, set: setName };
}

export const animationName = createRoot(createAnimationName);
