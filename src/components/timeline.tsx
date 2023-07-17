import type { Component } from 'solid-js';
import { animationKey } from '../state';
import type { AnimationKey } from '../model/keyframes';

export const Timeline: Component = () => {
  let timelineRangeRef: HTMLInputElement | undefined;

  const tooltipLeft = () => {
    const key = animationKey.value();

    timelineRangeRef?.focus();

    if (key === 'from') {
      return '0%';
    }

    if (key === 'to') {
      return '100%';
    }

    return key;
  };

  const handleTimeInputChange = (value: string) => {
    let key: AnimationKey = `${parseFloat(value)}%`;

    if (value === '0') {
      key = 'from';
    } else if (value === '100') {
      key = 'to';
    }

    animationKey.set(key);
  };

  const handleMaximumTimeChange = (value: string) => {};

  return (
    <div class="flex border-t-2 border-t-slate-900 p-8">
      <label class="relative flex-grow">
        <span
          class="absolute -top-5 -translate-x-1/2 select-none"
          style={{
            left: tooltipLeft(),
          }}
        >
          {animationKey.value()}
        </span>
        <span class="hidden">Timeline</span>
        <input
          ref={timelineRangeRef}
          class="w-full"
          type="range"
          min="0"
          max="100"
          value={0}
          onInput={(event) => handleTimeInputChange(event.target.value)}
        />
      </label>

      <label class="flex-shrink">
        <input
          type="number"
          value="3"
          onChange={(event) => handleMaximumTimeChange(event.target.value)}
        />
        seg
      </label>
    </div>
  );
};
