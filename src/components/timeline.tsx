import type { Component } from 'solid-js';
import { animationKey } from '../state';
import type { AnimationKey } from '../model/keyframes';
import { animationDuration } from '../state/animation-duration';
import { Input } from './common/input';

export const Timeline: Component = () => {
  let timelineRangeRef: HTMLInputElement | undefined;

  const tooltipLeft = () => {
    const key = animationKey.get();

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

  const handleMaximumTimeChange = (value: string) => {
    animationDuration.set(parseFloat(value));
  };

  return (
    <div class="flex items-center justify-between gap-4">
      <label class="relative flex-grow">
        <span
          class="absolute -top-10 -translate-x-1/2 select-none rounded border border-gray-300 bg-white px-2 py-1"
          style={{
            left: tooltipLeft(),
          }}
        >
          {animationKey.get()}
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

      <label class="flex flex-shrink items-center justify-between gap-2">
        <Input
          class="w-16 text-right"
          type="number"
          value="3"
          onChange={(event) => handleMaximumTimeChange(event.target.value)}
        />
        <span>seg</span>
      </label>
    </div>
  );
};
