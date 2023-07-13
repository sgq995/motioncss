/** CSS Units */

type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn';

type PercentageUnit = '%';

type RelativeLengthUnit =
  | 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  | 'rem'
  | 'rlh';

type AbsoluteLengthUnit = 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt';

type LengthUnit = RelativeLengthUnit | AbsoluteLengthUnit;

/** Geometric */

type GeometricOperation2D<TValue> = {
  x: TValue;
  y: TValue;
};

type GeometricOperationPoint2D<TValue> = {
  w: TValue;
};

type GeometricOperation3D<TValue> = {
  x: TValue;
  y: TValue;
  z: TValue;
};

type GeometricOperationAxis3D<TValue> = {
  x: number;
  y: number;
  z: number;
  w: TValue;
};

type GeometricOperationX<TValue> = {
  x: TValue;
};

type GeometricOperationY<TValue> = {
  y: TValue;
};

type GeometricOperationZ<TValue> = {
  z: TValue;
};

type GeometricOperation<TValue> =
  | GeometricOperation2D<TValue>
  | GeometricOperationPoint2D<TValue>
  | GeometricOperation3D<TValue>
  | GeometricOperationAxis3D<TValue>
  | GeometricOperationX<TValue>
  | GeometricOperationY<TValue>
  | GeometricOperationZ<TValue>;

function isGeometricOperation2D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperation2D<TValue> {
  return (
    'x' in operation &&
    'y' in operation &&
    !('z' in operation) &&
    !('w' in operation)
  );
}

function isGeometricOperationPoint2D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationPoint2D<TValue> {
  return (
    !('x' in operation) &&
    !('y' in operation) &&
    !('z' in operation) &&
    'w' in operation
  );
}

function isGeometricOperation3D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperation3D<TValue> {
  return (
    'x' in operation &&
    'y' in operation &&
    'z' in operation &&
    !('w' in operation)
  );
}

function isGeometricOperationAxis3D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationAxis3D<TValue> {
  return (
    'x' in operation && 'y' in operation && 'z' in operation && 'w' in operation
  );
}

function isGeometricOperationX<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationX<TValue> {
  return (
    'x' in operation &&
    !('y' in operation) &&
    !('z' in operation) &&
    !('w' in operation)
  );
}

function isGeometricOperationY<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationY<TValue> {
  return (
    !('x' in operation) &&
    'y' in operation &&
    !('z' in operation) &&
    !('w' in operation)
  );
}

function isGeometricOperationZ<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationZ<TValue> {
  return (
    !('x' in operation) &&
    !('y' in operation) &&
    'z' in operation &&
    !('w' in operation)
  );
}

/** Transform Functions */

type RotationValue = 0 | '0' | `${number}${AngleUnit}`;

type Rotate = GeometricOperation<RotationValue>;

function rotateToString(rotate: Rotate) {
  if (isGeometricOperationPoint2D(rotate)) {
    return `rotate(${rotate.w})`;
  }

  if (isGeometricOperationAxis3D(rotate)) {
    return `rotate3d(${rotate.x}, ${rotate.y}, ${rotate.z}, ${rotate.w})`;
  }

  if (isGeometricOperationX(rotate)) {
    return `rotateX(${rotate.x})`;
  }

  if (isGeometricOperationY(rotate)) {
    return `rotateY(${rotate.y})`;
  }

  if (isGeometricOperationZ(rotate)) {
    return `rotateZ(${rotate.z})`;
  }

  return '';
}

type ScalingValue = number | `${number}` | `${number}${PercentageUnit}`;

type Scale = GeometricOperation<ScalingValue>;

function scaleToString(scale: Scale) {
  if (isGeometricOperation2D(scale)) {
    return `scale(${scale.x}, ${scale.y})`;
  }

  if (isGeometricOperationPoint2D(scale)) {
    return `scale(${scale.w})`;
  }

  if (isGeometricOperation3D(scale)) {
    return `scale3d(${scale.x}, ${scale.y}, ${scale.z})`;
  }

  if (isGeometricOperationX(scale)) {
    return `scaleX(${scale.x})`;
  }

  if (isGeometricOperationY(scale)) {
    return `scaleY(${scale.y})`;
  }

  if (isGeometricOperationZ(scale)) {
    return `scaleZ(${scale.z})`;
  }

  return '';
}

type TranslationValue = `${number}${LengthUnit}` | `${number}${PercentageUnit}`;

type Translate = GeometricOperation<TranslationValue>;

function translateToString(translate: Translate) {
  if (isGeometricOperationPoint2D(translate)) {
    return `translate(${translate.w})`;
  }

  if (isGeometricOperation2D(translate)) {
    return `translate(${translate.x}, ${translate.y})`;
  }

  if (isGeometricOperation3D(translate)) {
    return `translate3d(${translate.x}, ${translate.y}, ${translate.z})`;
  }

  if (isGeometricOperationX(translate)) {
    return `translateX(${translate.x})`;
  }

  if (isGeometricOperationY(translate)) {
    return `translateY(${translate.y})`;
  }

  if (isGeometricOperationZ(translate)) {
    return `translateZ(${translate.z})`;
  }

  return '';
}

/** CSS Properties */
type Transform = {
  scale?: Scale;
  rotate?: Rotate;
  translate?: Translate;
};

function transformToString(transform: Transform) {
  // TODO: Transform array
  const functions = [];

  if (transform.scale) {
    const scale = scaleToString(transform.scale);
    functions.push(scale);
  }

  if (transform.rotate) {
    const rotate = rotateToString(transform.rotate);
    functions.push(rotate);
  }

  if (transform.translate) {
    const translate = translateToString(transform.translate);
    functions.push(translate);
  }

  let css = '';
  if (functions.length > 0) {
    css = `transform: ${functions.join(' ')};`;
  }

  return css;
}

type Opacity = number | `${number}${PercentageUnit}`;

function opacityToString(opacity: Opacity) {
  return `opacity: ${opacity};`;
}

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
