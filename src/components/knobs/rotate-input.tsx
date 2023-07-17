import type { Component } from 'solid-js';
import { RangeInput } from './range-input';
import { keyframes } from '../../state';
import type { RotationValue } from '../../model/rotate';

export const RotateInput: Component = () => {
  const handleInputChange = (value: string) => {
    keyframes.rotate({ w: value as RotationValue });
  };

  return (
    <RangeInput
      label="Rotate"
      min={0}
      step={15}
      max={360}
      defaultValue={0}
      onValueChange={handleInputChange}
    />
  );
};
