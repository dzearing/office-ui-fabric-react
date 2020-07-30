import * as React from 'react';
import { ToggleButtonProps } from './ToggleButton.types';
import { makeClasses } from '@fluentui/react-compose';
import { createToggleButton } from './createToggleButton';
import { useFocusRects } from '@uifabric/utilities';
import * as buttonClasses from '../Button/Button.scss';
import * as toggleButtonClasses from './ToggleButton.scss';

import { useInlineTokens } from '../Button/useInlineTokens';
import { makeVariants } from '../Button/makeVariants';
import { buttonVariants } from '../Button/ButtonVariants';

const useButtonClasses = makeClasses(buttonClasses);
const useToggleButtonClasses = makeClasses(toggleButtonClasses);
const useButtonVariants = makeVariants('Button', '--button', buttonVariants);

/**
 * Define a styled Button, using the `createButton` factory.
 */
export const ToggleButton = React.forwardRef<HTMLElement, ToggleButtonProps>((props, ref) => {
  const { render, state } = createToggleButton(props, ref);

  // style stuff
  useButtonClasses(state);
  useToggleButtonClasses(state);
  useButtonVariants(state);
  useFocusRects(state.ref);
  useInlineTokens(state);

  return render(state);
});

ToggleButton.displayName = 'ToggleButton';
