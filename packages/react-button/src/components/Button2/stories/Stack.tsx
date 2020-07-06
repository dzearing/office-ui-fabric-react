import * as React from 'react';
import * as classes from './Button.stories.scss';
import { useVariantClass } from '../useVariantClass';

export interface StackProps extends React.HTMLAttributes<{}> {
  horizontal?: boolean;
  variant?: string;
}

/**
 * Temporary Stack until there's one in its own package.
 */
export const Stack = ({ horizontal, ...rest }: StackProps) => {
  rest.className = horizontal ? classes.hStack : classes.vStack;
  useVariantClass(rest);

  return <div {...rest} />;
};
