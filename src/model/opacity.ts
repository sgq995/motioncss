import type { PercentageUnit } from "./units";

export type Opacity = number | `${number}${PercentageUnit}`;

export function opacityToString(opacity: Opacity) {
  return `opacity: ${opacity};`;
}
