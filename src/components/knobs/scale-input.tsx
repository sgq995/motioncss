import type { Component } from 'solid-js';
import { RangeInput } from './range-input';
import { keyframes } from '../../state/keyframes';

export const ScaleInput: Component = () => {
  const handleInputChange = (value: string) => {
    console.log({ value });
    keyframes.scale(value);
  };

  return (
    <RangeInput
      label="Scale"
      min={0}
      step={0.01}
      max={2}
      defaultValue={1}
      onChange={handleInputChange}
    />
  );
};
