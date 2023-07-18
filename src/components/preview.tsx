import type { Component } from 'solid-js';
import { code } from '../state/code';
import { animationName } from '../state/animation-name';
import { animationDuration } from '../state/animation-duration';
import { TbStar } from 'solid-icons/tb';

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
      <a
        href="https://github.com/sgq995/motioncss"
        class="round relative flex place-items-center gap-2 overflow-hidden rounded border-2 border-slate-900 p-4"
        classList={{ preview: true }}
      >
        <TbStar />
        Star on GitHub
      </a>
    </div>
  );
};
