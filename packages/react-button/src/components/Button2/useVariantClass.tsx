import { useTheme, tokensToStyleObject } from '@fluentui/react-theme-provider';
import { mergeStyles, IStyle } from '@uifabric/merge-styles';

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
    }
  }
};
