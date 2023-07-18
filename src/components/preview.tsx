import type { Component } from 'solid-js';
import { code } from '../state/code';
import { animationName } from '../state/animation-name';
import { animationDuration } from '../state/animation-duration';

export const Preview: Component = () => {
  return (
    <div class="grid flex-grow place-items-center">
      <style>{code.get()}</style>
      <style>{`
.preview {
  animation-name: ${animationName.get()};
  animation-duration: ${animationDuration.get()};
  animation-iteration-count: infinite;
}
`}</style>
      <div
        class="round relative grid h-16 w-32 place-items-center overflow-hidden rounded border-2 border-slate-900"
        classList={{ preview: true }}
      >
        Star on GitHub
      </div>
    </div>
  );
};
