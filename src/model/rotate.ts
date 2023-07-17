import {
  isGeometricOperationPoint2D,
  type GeometricOperation,
  isGeometricOperationAxis3D,
  isGeometricOperationX,
  isGeometricOperationY,
  isGeometricOperationZ,
} from './geometric';
import type { AngleUnit } from './units';

export type RotationValue = 0 | '0' | `${number}${AngleUnit}`;

export type Rotate = GeometricOperation<RotationValue>;

export function rotateToString(rotate: Rotate) {
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
