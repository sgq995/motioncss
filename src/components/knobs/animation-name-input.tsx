import type { Component } from 'solid-js';
import { TextInput } from './text-input';
import { animationName } from '../../state/animation-name';

export const AnimationNameInput: Component = () => {
  const handleInputChange = (value: string) => {
    animationName.set(value);
  };

  return (
    <TextInput value={animationName.get()} onTextChange={handleInputChange} />
  );
};
