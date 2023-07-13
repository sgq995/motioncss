import type { Component } from 'solid-js';

export const TranslateInput: Component = () => {
  return (
    <div class="flex justify-between">
      <span>Translate</span>

      <div class="flex w-3/4 justify-between gap-4">
        <label class="flex">
          <span>X</span>
          <input class="w-full" type="number" />
        </label>

        <label class="flex">
          <span>Y</span>
          <input class="w-full" type="number" />
        </label>

        <label class="flex">
          <span>Z</span>
          <input class="w-full" type="number" />
        </label>
      </div>
    </div>
  );
};
