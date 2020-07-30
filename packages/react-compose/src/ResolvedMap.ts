import { ClassDictionary } from './types';
type ResolvedMap = {
  slots: Record<string, string>;
  modifiers: Record<string, string>;
  enums: Record<string, Record<string, string>>;
};
/**
 * Helper to take a css module map and translate it into { slots, modifiers, enums } where
 * slots are a matched name in the slotNames array, enums have underscores splitting the matched
 * name/value, and modifiers are everything else. Creating this split definition keeps runtime
 * resolution work to a minimum.
 */

export function createResolvedMap(classes: ClassDictionary): ResolvedMap {
  const resolvedMap: ResolvedMap = {
    slots: {},
    modifiers: {},
    enums: {},
  };
  const { slots, modifiers, enums } = resolvedMap;

  // Iterate through classes
  Object.keys(classes).forEach((key: string) => {
    const classValue = classes[key];

    if (classValue) {
      const classParts = key.split('_');

      // If the class is named the same as a slot, add it to the slot.
      switch (classParts.length) {
        case 2: // modifier (_modifierName)
          modifiers[classParts[1]] = classValue;
          break;

        case 3: // enum (_enumName_enumValue)
          const enumName = classParts[1];
          const enumValue = classParts[2];
          const enumValues = (enums[enumName] = enums[enumName] || {});

          enumValues[enumValue] = classValue;
          break;

        default:
          // slot (root)
          slots[key] = classValue;
      }
    }
  });

  return resolvedMap;
}
