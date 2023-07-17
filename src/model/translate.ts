import {
  isGeometricOperationPoint2D,
  type GeometricOperation,
  isGeometricOperation2D,
  isGeometricOperation3D,
  isGeometricOperationX,
  isGeometricOperationY,
  isGeometricOperationZ,
} from './geometric';
import type { LengthUnit, PercentageUnit } from './units';

export type TranslationValue =
  | `${number}${LengthUnit}`
  | `${number}${PercentageUnit}`;

export type Translate = GeometricOperation<TranslationValue>;

export function translateToString(translate: Translate) {
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
