import type { Component } from 'solid-js';

export type RangeInputProps = {
  label: string;
  min: number;
  step: number;
  max: number;
  defaultValue: number;
  onValueChange: (value: string) => void;
};

export const RangeInput: Component<RangeInputProps> = (props) => {
  return (
    <label>
      <div class="flex justify-between">
        <span>{props.label}</span>
        <input
          class="w-3/4"
          type="range"
          min={props.min}
          step={props.step}
          max={props.max}
          value={props.defaultValue}
          onInput={(e) => props.onValueChange(e.target.value)}
        />
      </div>
    </label>
  );
};
