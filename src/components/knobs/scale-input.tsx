import type { Component } from 'solid-js';
import { RangeInput } from './range-input';
import { keyframes } from '../../state/keyframes';
import type { ScalingValue } from '../../model/scale';

export const ScaleInput: Component = () => {
  const handleInputChange = (value: string) => {
    keyframes.scale({ w: value as ScalingValue });
  };

  return (
    <RangeInput
      label="Scale"
      min={0}
      step={0.01}
      max={2}
      defaultValue={1}
      onValueChange={handleInputChange}
    />
  );
};
