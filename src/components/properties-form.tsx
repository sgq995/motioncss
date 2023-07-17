import type { Component } from 'solid-js';
import { TextInput } from './knobs/text-input';
import { TranslateInput } from './knobs/translate-input';
import { ScaleInput } from './knobs/scale-input';
import { RotateInput } from './knobs/rotate-input';
import { OpacityInput } from './knobs/opacity-input';
import { AnimationNameInput } from './knobs/animation-name-input';

export const PropertiesForm: Component = () => {
  return (
    <form>
      <AnimationNameInput />

      <TranslateInput />

      <ScaleInput />

      <RotateInput />

      <OpacityInput />
    </form>
  );
};
