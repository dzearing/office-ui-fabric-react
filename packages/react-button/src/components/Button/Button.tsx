import * as React from 'react';
import { createButton } from './createButton';
import { ButtonProps } from './Button.types';
import { useFocusRects } from '@uifabric/utilities';
import { makeClasses } from '@fluentui/react-compose';
import { makeVariants } from './makeVariants';
import { useInlineTokens } from './useInlineTokens';
import { buttonVariants } from './ButtonVariants';
import * as classes from './Button.scss';

// Create a hook to resolve classnames.
export const useButtonClasses = makeClasses(classes);

// Create a hook to resolve variants.
export const useButtonVariants = makeVariants('Button', '--button', buttonVariants);

/**
 * Define a styled Button, using the `createButton` factory.
 */
export const Button = React.forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const { render, state } = createButton(props, ref);

  // style stuff
  useButtonClasses(state);
  useButtonVariants(state);
  useFocusRects(state.ref);
  useInlineTokens(state);

  return render(state);
});

Button.displayName = 'Button';
