import * as React from 'react';
import * as classes from './Button.stories.scss';

/**
 * Temporary Text until there's one in its own package.
 */
export const Text = (props: React.PropsWithChildren<{}>) => <h2 {...props} className={classes.text} />;
