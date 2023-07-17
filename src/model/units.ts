export type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn';

export type PercentageUnit = '%';

export type RelativeLengthUnit =
  | 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  | 'rem'
  | 'rlh';

export type AbsoluteLengthUnit = 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt';

export type LengthUnit = RelativeLengthUnit | AbsoluteLengthUnit;
