import type { Component } from 'solid-js';
import { RangeInput } from './range-input';

export const ScaleInput: Component = () => {
  return (
    <RangeInput label="Scale" min={0} step={0.01} max={2} defaultValue={1} />
  );
};
