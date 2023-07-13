import type { Component } from 'solid-js';
import { RangeInput } from './range-input';

export const RotateInput: Component = () => {
  return (
    <RangeInput label="Rotate" min={0} step={15} max={360} defaultValue={0} />
  );
};
