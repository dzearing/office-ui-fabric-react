import { createUseClasses } from '@fluentui/react-compose';
import { ButtonBase } from './ButtonBase';
import * as classes from './Button.scss';
import { makeVariants } from './useVariantClass';
import { useFocusRects } from '@uifabric/utilities';
import { useInlineTokens } from './useInlineTokens';
import { buttonVariants } from './ButtonVariants';
import { Button2State } from './Button.types';

export const Button2 = ButtonBase.extend({
  displayName: 'Button2',

  useHooks: [
    // apply stylesheet classes
    createUseClasses(classes),

    // apply focus classnames to root when appropriate
    // tslint:disable-next-line:no-any
    (state: Button2State) => useFocusRects(state.ref as any),

    // apply variant token sets
    makeVariants('--button', buttonVariants),

    // apply inline tokens
    useInlineTokens,
  ],
});

// Problem: Ribbon dev wants to use <Button/>, but have 4 varitions, each with slightly different
// default tokens. What is the easiest, most correct way to do this?

// Non-option: use inline tokens. No!
// Non-option: apply button tokens at ThemeProvider. Does not support variants!

// Option A:
// compose separate RibbonButton and RibbonFlyoutButton with defaultProps specifying tokens

// Option B:
// compose RibbonButton with multiple variant values specifying defaultProp configs?
// compose(Button, {
//   variants: {
//     a: { className, defaultProps ...., tokens }
//     b: { className, defaultProps ...., tokens }
// })

// Option C:
// require user to use createRibbonTheme() in their theme, rending Ribbon without it
// makes Ribbon look like default components:
// <TP theme={{ createTheme(createRibbonTheme({...})) }}>
//   <Ribbon/>
// </TP>

// Option D (preferred):
// Encapsulate variants logic in a hook
