import { createRoot, createSignal } from 'solid-js';
import type {
  AnimationKey,
  AnimationStep,
  Keyframes,
} from '../model/keyframes';
import type { Scale, ScalingValue } from '../model/scale';
import { isGeometricOperationPoint2D } from '../model/geometric';
import type { Opacity } from '../model/opacity';
import { animationKey } from './animation-key';
import type { Rotate, RotationValue } from '../model/rotate';
import type { Translate, TranslationValue } from '../model/translate';

function getStep(keyframes: Keyframes, key: AnimationKey) {
  let step = keyframes[key];
  if (step === undefined) {
    step = {};
    keyframes[key] = step;
  }
  return step;
}

function getStepTransform(step: AnimationStep) {
  let transform = step.transform;
  if (transform === undefined) {
    transform = {};
    step.transform = transform;
  }
  return transform;
}

function createKeyframesState() {
  const [keyframes, setKeyframes] = createSignal<Keyframes>(
    {},
    { equals: (prev, next) => JSON.stringify(prev) !== JSON.stringify(next) }
  );

  /** Transform */
  const scale = (scaling: Scale) =>
    setKeyframes((keyframes) => {
      const step = getStep(keyframes, animationKey.get());
      const transform = getStepTransform(step);
      transform.scale = scaling;

      return keyframes;
    });

  const rotate = (rotation: Rotate) =>
    setKeyframes((keyframes) => {
      const step = getStep(keyframes, animationKey.get());
      const transform = getStepTransform(step);
      transform.rotate = rotation;

      return keyframes;
    });

  const translate = (translation: Translate) =>
    setKeyframes((keyframes) => {
      const step = getStep(keyframes, animationKey.get());
      const transform = getStepTransform(step);
      transform.translate = { ...transform.translate, ...translation };

      return keyframes;
    });

  /** Opacity */
  const opacity = (opacity: Opacity) =>
    setKeyframes((keyframes) => {
      const step = getStep(keyframes, animationKey.get());

      step.opacity = opacity;

      return keyframes;
    });

  return { get: keyframes, translate, scale, rotate, opacity };
}

export const keyframes = createRoot(createKeyframesState);
