import type { Component } from 'solid-js';
import { keyframes } from '../../state';

export const TranslateInput: Component = () => {
  const handleCoordinateXChange = (value: string) => {
    keyframes.translate({ x: `${parseFloat(value)}px` });
  };

  const handleCoordinateYChange = (value: string) => {
    keyframes.translate({ y: `${parseFloat(value)}px` });
  };

  const handleCoordinateZChange = (value: string) => {
    keyframes.translate({ z: `${parseFloat(value)}px` });
  };

  return (
    <div class="flex justify-between">
      <span>Translate</span>

      <div class="flex w-3/4 justify-between gap-4">
        <label class="flex">
          <span>X</span>
          <input
            class="w-full"
            type="number"
            value={0}
            onChange={(event) => handleCoordinateXChange(event.target.value)}
          />
        </label>

        <label class="flex">
          <span>Y</span>
          <input
            class="w-full"
            type="number"
            value={0}
            onChange={(event) => handleCoordinateYChange(event.target.value)}
          />
        </label>

        <label class="flex">
          <span>Z</span>
          <input
            class="w-full"
            type="number"
            value={0}
            onChange={(event) => handleCoordinateZChange(event.target.value)}
          />
        </label>
      </div>
    </div>
  );
};
