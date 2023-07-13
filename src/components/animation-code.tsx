import type { Component } from 'solid-js';
import { code } from '../state/code';

export const AnimationCode: Component = () => {
  return (
    <div class="overflow-x-auto p-4">
      {/* TODO: Copy Icon */}
      <pre class="rounded bg-gray-300 p-2">
        <code>{code.value()}</code>
      </pre>
    </div>
  );
};