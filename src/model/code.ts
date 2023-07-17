import { keyframesToString, type Keyframes } from './keyframes';

export function codeToString(name: string, keyframes: Keyframes) {
  return `@keyframes ${name} {
${keyframesToString(keyframes)}
}`;
}
