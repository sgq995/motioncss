import { createEffect, createRoot, createSignal } from 'solid-js';
import { keyframes } from './keyframes';
import type { Keyframes } from '../model/keyframes';
import { codeToString } from '../model/code';
import { animationName } from './animation-name';

function createCodeState() {
  const [code, setCode] = createSignal(
    '/** The code will be generated here */'
  );

  createEffect(() => {
    setCode(codeToString(animationName.get(), keyframes.get()));
  });

  return { get: code };
}

export const code = createRoot(createCodeState);
