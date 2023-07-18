import type { Component } from 'solid-js';
import { keyframes } from '../../state';
import { Input } from '../common/input';

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
    <div class="flex items-center justify-between">
      <span>Translate</span>

      <div class="flex w-3/4 items-center justify-between gap-4">
        <label class="flex items-center gap-2">
          <span>X</span>
          <Input
            class="w-full"
            type="number"
            value={0}
            onChange={(event) => handleCoordinateXChange(event.target.value)}
          />
        </label>

        <label class="flex items-center gap-2">
          <span>Y</span>
          <Input
            class="w-full"
            type="number"
            value={0}
            onChange={(event) => handleCoordinateYChange(event.target.value)}
          />
        </label>

        <label class="flex items-center gap-2">
          <span>Z</span>
          <Input
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
