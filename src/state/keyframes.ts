import { createRoot, createSignal } from 'solid-js';
import type { Keyframes } from '../model/keyframes';
import type { ScalingValue } from '../model/scale';
import { isGeometricOperationPoint2D } from '../model/geometric';

function createKeyframesState() {
  const [keyframes, setKeyframes] = createSignal<Keyframes>(
    {},
    { equals: (prev, next) => JSON.stringify(prev) !== JSON.stringify(next) }
  );

  /** Transform */
  const scale = (scale: ScalingValue) =>
    setKeyframes((keyframes) => {
      if (keyframes.from === undefined) {
        keyframes.from = {};
      }

      if (keyframes.from.transform === undefined) {
        keyframes.from.transform = {};
      }

      if (keyframes.from.transform.scale === undefined) {
        keyframes.from.transform.scale = { w: 0 };
      }

      if (isGeometricOperationPoint2D(keyframes.from.transform.scale)) {
        keyframes.from.transform.scale.w = scale;
      }

      return keyframes;
    });

  return { value: keyframes, scale };
}

export const keyframes = createRoot(createKeyframesState);
