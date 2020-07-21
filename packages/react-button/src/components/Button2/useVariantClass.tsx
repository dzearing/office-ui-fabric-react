import { useTheme, tokensToStyleObject } from '@fluentui/react-theme-provider';
import { mergeStyles, IStyle } from '@uifabric/merge-styles';
import { GenericDictionary } from '../../utils/tempTypes';

export const useVariantClass = (props: { variant?: string; className?: string }) => {
  const { variant, className } = props;
  const theme = useTheme();

  // If the user provides a variant,
  if (variant) {
    // Get the theme.
    const tokens = theme.tokens[variant];

    // If the variant is found in the theme, create the className and append it.
    if (tokens) {
      // tslint:disable-next-line:no-any
      const styleObject = tokensToStyleObject(tokens as any);
      const variantClassName = mergeStyles(styleObject as IStyle);

      props.className = `${className || ''} ${variantClassName}`;
      delete props.variant;
    }
  }
};

export const makeVariants = (prefix: string, variants: GenericDictionary) => {
  // Guarantee uniqueness of classname map.
  // const id = getId('variant_' + componentName);
  const settings: Record<string, string> = {}; // useThemeSettings(id);

  return (state: GenericDictionary) => {
    const { variant } = state;
    const variantKeys = [];

    for (const currentVariant of Object.keys(variants)) {
      if (
        variants[currentVariant] &&
        (currentVariant === 'base' || state[currentVariant] || currentVariant === variant)
      ) {
        variantKeys.push(currentVariant);
      }
    }

    const key = variantKeys.join(' ');
    let className = settings[key];

    if (!className) {
      const tokens = variantKeys.reduce((p, c) => {
        Object.assign(p, tokensToStyleObject(variants[c], prefix));
        return p;
      }, {});

      className = settings[key] = mergeStyles(tokens as IStyle);
    }

    state.className = `${state.className || ''} ${className}`;
  };
};
