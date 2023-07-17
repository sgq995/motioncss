import { createEffect, createRoot, createSignal } from 'solid-js';
import { keyframes } from './keyframes';
import { keyframesToString, type Keyframes } from '../model/keyframes';

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
