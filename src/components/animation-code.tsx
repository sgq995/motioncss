import type { Component } from 'solid-js';
import { code } from '../state/code';

export const AnimationCode: Component = () => {
  return (
    <pre class="max-h-full overflow-auto rounded bg-gray-300 p-2">
      <code>{code.get()}</code>
    </pre>
  );
};
