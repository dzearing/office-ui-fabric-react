const NON_PIXEL_NUMBER_PROPS: { [key: string]: number } = {
  'columnCount': 1,
  'fontWeight': 1,
  'flexBasis': 1,
  'flex': 1,
  'flexGrow': 1,
  'flexShrink': 1,
  'fillOpacity': 1,
  'opacity': 1,
  'order': 1,
  'zIndex': 1,
  'zoom': 1
};

export function provideUnits(
  name: string,
  value: string | number
): string {
  if (typeof value === 'number') {
    const unit = NON_PIXEL_NUMBER_PROPS[name] ? '' : 'px';

    value = `${value}${unit}`;
  }

  return value;
}
