type Transform2DFunction = {
  x: number;
  y: number;
};

type Transform3DFunction = {
  x: number;
  y: number;
  z: number;
};

type TransformBase<TFunction> = {
  scale: TFunction;
  rotate: TFunction;
  translate: TFunction;
};

type Transform = TransformBase<Transform2DFunction>;

type Step = {
  transform: Transform;
  opacity: number;
};

type AnimationKey = 'from' | 'to' | `${number}%`;

type AnimationProperties<Type> = {
  [Property in keyof Type as AnimationKey]: Step;
};

type Keyframes = AnimationProperties<{
  readonly [key: string]: Step;
}>;

function convertTransformToCode(transform: Transform) {
  return `scale(${transform.scale.x}px, ${transform.scale.y}px) rotate(${transform.rotate.x}px, ${transform.rotate.y}px) translate(${transform.translate.x}px, ${transform.translate.y}px)`;
}

function convertStepToCode(step: Step) {
  return `opacity: ${step.opacity};
transform: ${convertTransformToCode(step.transform)};`;
}

export function convertKeyframesToCode(keyframes: Keyframes) {
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
    return `${code}
  ${step} {
    ${convertStepToCode(keyframes[step])}
  }
`;
  }, '');
}
