import { getVendorSettings } from './getVendorSettings';

const autoPrefixNames: { [key: string]: number } = {
  'userSelect': 1
};

export function prefixRules(
  rulePairs: (string | number)[],
  index: number
): void {
  const vendorSettings = getVendorSettings();

  const name = rulePairs[index];

  if (autoPrefixNames[name]) {
    const value = rulePairs[index + 1];

    if (autoPrefixNames[name]) {
      if (vendorSettings.isWebkit) {
        rulePairs.push('Webkit' + name, value);
      }
      if (vendorSettings.isMoz) {
        rulePairs.push('Moz' + name, value);
      }
      if (vendorSettings.isMs) {
        rulePairs.push('Ms' + name, value);
      }
      if (vendorSettings.isOpera) {
        rulePairs.push('O' + name, value);
      }
    }
  }
}
