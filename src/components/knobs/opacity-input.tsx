import type { Component } from 'solid-js';
import { RangeInput } from './range-input';

export const OpacityInput: Component = () => {
  return (
    <RangeInput label="Opacity" min={0} step={0.1} max={1} defaultValue={1} />
  );
};
