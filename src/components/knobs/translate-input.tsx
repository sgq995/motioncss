import type { Component } from 'solid-js';
import { keyframes } from '../../state';
import type { TranslationValue } from '../../model/translate';

export const TranslateInput: Component = () => {
  const handleCoordinateXChange = (value: string) => {
    keyframes.translate({ x: value as TranslationValue });
  };

  const handleCoordinateYChange = (value: string) => {
    keyframes.translate({ y: value as TranslationValue });
  };

  const handleCoordinateZChange = (value: string) => {
    keyframes.translate({ z: value as TranslationValue });
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
