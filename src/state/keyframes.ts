import { createRoot, createSignal } from 'solid-js';
import type { Keyframes } from '../converter';

/** TODO: Move to model */
type PercentageUnit = '%';
type ScalingValue = number | `${number}` | `${number}${PercentageUnit}`;

function createKeyframesState() {
  const [keyframes, setKeyframes] = createSignal<Keyframes>({});
  const scale = (scale: ScalingValue) =>
    setKeyframes((keyframes) => ({
      ...keyframes,
      from: {
        ...keyframes.from,
        transform: {
          ...keyframes.from?.transform,
          scale: { w: scale },
        },
      },
    }));
  return { value: keyframes, scale };
}

export const keyframes = createRoot(createKeyframesState);
