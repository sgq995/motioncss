import type { Component } from 'solid-js';
import { RangeInput } from './range-input';
import type { Opacity } from '../../model/opacity';
import { keyframes } from '../../state/keyframes';

export const OpacityInput: Component = () => {
  const handleInputChange = (opacity: string) => {
    keyframes.opacity(opacity as Opacity);
  };

  return (
    <RangeInput
      label="Opacity"
      min={0}
      step={0.1}
      max={1}
      defaultValue={1}
      onValueChange={handleInputChange}
    />
  );
};
