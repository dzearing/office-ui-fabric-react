import { useTheme, tokensToStyleObject, TokenSet } from '@fluentui/react-theme-provider';
import { mergeStyles, IStyle } from '@uifabric/merge-styles';
import { GenericDictionary } from '../../utils/tempTypes';

// export const useVariantClass = (props: { variant?: string; className?: string }) => {
//   const { variant, className } = props;
//   const theme = useTheme();

//   // If the user provides a variant,
//   if (variant) {
//     // Get the theme.
//     const tokens = theme.tokens[variant];

//     // If the variant is found in the theme, create the className and append it.
//     if (tokens) {
//       // tslint:disable-next-line:no-any
//       const styleObject = tokensToStyleObject(tokens as any);
//       const variantClassName = mergeStyles(styleObject as IStyle);

//       props.className = `${className || ''} ${variantClassName}`;
//       delete props.variant;
//     }
//   }
// };

const parseVariants = (
  variants: Record<string, TokenSet> | undefined,
  state: GenericDictionary,
  variantKeys: string[],
  variantObjects: TokenSet[],
) => {
  if (variants) {
    for (const variantName of Object.keys(variants)) {
      if (variants[variantName] && (variantName === 'base' || state[variantName])) {
        variantKeys.push(variantName);
        variantObjects.push(variants[variantName]);
      }
    }
  }
};

export const makeVariants = (componentName: string, prefix: string, defaultVariants: Record<string, TokenSet>) => {
  // Guarantee uniqueness of classname map.
  // const id = getId('variant_' + componentName);
  const variantToClassName: Record<string, string> = {}; // useThemeSettings(id);

  return (state: GenericDictionary) => {
    const theme = useTheme();
    const variantKeys: string[] = [];
    const variantObjects: TokenSet[] = [];
    let themeVariants: Record<string, TokenSet> | undefined = undefined;

    if (theme && theme.components && theme.components[componentName]) {
      themeVariants = theme.components[componentName].variants;
    }

    parseVariants(defaultVariants, state, variantKeys, variantObjects);
    parseVariants(themeVariants, state, variantKeys, variantObjects);

    const key = variantKeys.join('-');
    let className = variantToClassName[key];

    if (!className) {
      const tokens = variantObjects.map(obj => {
        if (typeof obj === 'object') {
          const newObj = tokensToStyleObject(obj, prefix);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (newObj as any).displayName = key;

          return newObj;
        }
        return obj;
      });
      className = variantToClassName[key] = mergeStyles(tokens as IStyle[]);
    }

    state.className = `${state.className || ''} ${className}`;
  };
};
