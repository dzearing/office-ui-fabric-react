import * as React from 'react';
import { ChevronDownIcon } from '@fluentui/react-icons';
import { ContextualMenu, useFocusRects } from 'office-ui-fabric-react';
import { createMenuButton } from './createMenuButton';
import { MenuButtonProps } from './MenuButton.types';
import * as classes from './MenuButton.scss';
import { useButtonClasses, useButtonVariants } from '../Button/Button';
import { makeClasses } from '@fluentui/react-compose';
import { useInlineTokens } from '../Button/useInlineTokens';

export const useMenuButtonClasses = makeClasses(classes);

export const MenuButton = React.forwardRef<HTMLElement, MenuButtonProps>((props, ref) => {
  const { state, render } = createMenuButton(props, ref, {
    menuIcon: { as: ChevronDownIcon },
    menu: { as: ContextualMenu },
  });

  // styling
  useButtonClasses(state);
  useMenuButtonClasses(state);
  useButtonVariants(state);
  useFocusRects(state.ref);
  // Typings aren't working right here! "style" is not compatible???
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useInlineTokens(state as any);

  return render(state);
});

MenuButton.displayName = 'MenuButton';
