export type GeometricOperation2D<TValue> = {
  x: TValue;
  y: TValue;
};

export type GeometricOperationPoint2D<TValue> = {
  w: TValue;
};

export type GeometricOperation3D<TValue> = {
  x: TValue;
  y: TValue;
  z: TValue;
};

export type GeometricOperationAxis3D<TValue> = {
  x: number;
  y: number;
  z: number;
  w: TValue;
};

export type GeometricOperationX<TValue> = {
  x: TValue;
};

export type GeometricOperationY<TValue> = {
  y: TValue;
};

export type GeometricOperationZ<TValue> = {
  z: TValue;
};

export type GeometricOperation<TValue> =
  | GeometricOperation2D<TValue>
  | GeometricOperationPoint2D<TValue>
  | GeometricOperation3D<TValue>
  | GeometricOperationAxis3D<TValue>
  | GeometricOperationX<TValue>
  | GeometricOperationY<TValue>
  | GeometricOperationZ<TValue>;

export function isGeometricOperation2D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperation2D<TValue> {
  return (
    'x' in operation &&
    'y' in operation &&
    !('z' in operation) &&
    !('w' in operation)
  );
}

export function isGeometricOperationPoint2D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationPoint2D<TValue> {
  return (
    !('x' in operation) &&
    !('y' in operation) &&
    !('z' in operation) &&
    'w' in operation
  );
}

export function isGeometricOperation3D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperation3D<TValue> {
  return (
    'x' in operation &&
    'y' in operation &&
    'z' in operation &&
    !('w' in operation)
  );
}

export function isGeometricOperationAxis3D<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationAxis3D<TValue> {
  return (
    'x' in operation && 'y' in operation && 'z' in operation && 'w' in operation
  );
}

export function isGeometricOperationX<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationX<TValue> {
  return (
    'x' in operation &&
    !('y' in operation) &&
    !('z' in operation) &&
    !('w' in operation)
  );
}

export function isGeometricOperationY<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationY<TValue> {
  return (
    !('x' in operation) &&
    'y' in operation &&
    !('z' in operation) &&
    !('w' in operation)
  );
}

export function isGeometricOperationZ<TValue>(
  operation: GeometricOperation<TValue>
): operation is GeometricOperationZ<TValue> {
  return (
    !('x' in operation) &&
    !('y' in operation) &&
    'z' in operation &&
    !('w' in operation)
  );
}
