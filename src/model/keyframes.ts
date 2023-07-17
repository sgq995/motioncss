import { opacityToString, type Opacity } from './opacity';
import { transformToString, type Transform } from './transform';

type Step = {
  transform?: Transform;
  opacity?: Opacity;
};

type AnimationKey = 'from' | 'to' | `${number}%`;

type AnimationProperties<Type> = {
  [Property in keyof Type as AnimationKey]?: Step;
};

export type Keyframes = AnimationProperties<{
  readonly [key: string]: Step;
}>;

export function keyframesToString(keyframes: Keyframes) {
  const frames: AnimationKey[] = Object.keys(keyframes).sort((a, b) => {
    if (a === 'from') {
      return -1;
    } else if (b === 'from') {
      return 1;
    }

    if (a === 'to') {
      return 1;
    } else if (b === 'to') {
      return -1;
    }

    let firstPercentage = parseFloat(a.substring(0, a.length - 1));
    let secondPercentage = parseFloat(b.substring(0, b.length - 1));

    return firstPercentage - secondPercentage;
  }) as AnimationKey[];

  return frames.reduce((code, step) => {
    const currentKeyFrame = keyframes[step];

    let css = '';

    if (currentKeyFrame?.opacity !== undefined) {
      const opacity = opacityToString(currentKeyFrame.opacity);
      css = `${css}
    ${opacity}`;
    }

    if (currentKeyFrame?.transform !== undefined) {
      const transform = transformToString(currentKeyFrame.transform);
      css = `${css}
    ${transform}`;
    }

    css = css.trim();
    if (css.length === 0) {
      return code;
    }

    return `${code}
  ${step} {
    ${css}
  }
`;
  }, '');
}
