import { createUseClasses } from '@fluentui/react-compose';
import { useFocusRects } from '@uifabric/utilities';

import { ButtonBase } from './ButtonBase';
import * as classes from './Button.scss';
import { ButtonState } from './Button.types';

import { makeVariants } from './makeVariants';
import { useInlineTokens } from './useInlineTokens';
import { buttonVariants } from './ButtonVariants';

export const Button = ButtonBase.extend({
  displayName: 'Button',

  useHooks: [
    // apply stylesheet classes
    createUseClasses(classes),

    // apply focus classnames to root when appropriate
    // tslint:disable-next-line:no-any
    (state: ButtonState) => useFocusRects(state.ref as any),

    // apply variant token sets
    makeVariants('Button', '--button', buttonVariants),

    // apply inline tokens
    useInlineTokens,
  ],
});
