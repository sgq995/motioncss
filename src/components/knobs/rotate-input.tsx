import type { Component } from 'solid-js';
import { RangeInput } from './range-input';
import { keyframes } from '../../state';

export const RotateInput: Component = () => {
  const handleInputChange = (value: string) => {
    keyframes.rotate({ w: `${parseFloat(value)}deg` });
  };

  return (
    <RangeInput
      label="Rotate"
      min={-360}
      step={15}
      max={360}
      defaultValue={0}
      onValueChange={handleInputChange}
    />
  );
};
