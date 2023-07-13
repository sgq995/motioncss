import { createEffect, createRoot, createSignal } from 'solid-js';
import { Keyframes, keyframesToString } from '../converter';
import { keyframes } from './keyframes';

function createCodeState() {
  const [code, setCode] = createSignal(
    '/** The code will be generated here */'
  );
  const generate = (keyframes: Keyframes) =>
    setCode(keyframesToString(keyframes));
  createEffect(() => generate(keyframes.value()));
  return { value: code, generate };
}

export const code = createRoot(createCodeState);
