import * as React from 'react';
import * as classes from './Button.stories.scss';

export interface StackProps extends React.HTMLAttributes<{}> {
  horizontal?: boolean;
}

/**
 * Temporary Stack until there's one in its own package.
 */
export const Stack = ({ horizontal, ...rest }: StackProps) => (
  <div {...rest} className={horizontal ? classes.hStack : classes.vStack} />
);
