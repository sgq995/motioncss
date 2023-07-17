import { rotateToString, type Rotate } from './rotate';
import { scaleToString, type Scale } from './scale';
import { translateToString, type Translate } from './translate';

export type Transform = {
  scale?: Scale;
  rotate?: Rotate;
  translate?: Translate;
};

export function transformToString(transform: Transform) {
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
