import {
  isGeometricOperation2D,
  type GeometricOperation,
  isGeometricOperationPoint2D,
  isGeometricOperation3D,
  isGeometricOperationX,
  isGeometricOperationY,
  isGeometricOperationZ,
} from './geometric';
import type { PercentageUnit } from './units';

export type ScalingValue = number | `${number}` | `${number}${PercentageUnit}`;

export type Scale = GeometricOperation<ScalingValue>;

export function scaleToString(scale: Scale) {
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
