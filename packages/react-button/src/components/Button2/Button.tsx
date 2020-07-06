import { compose2, createUseClasses } from '@fluentui/react-compose';
import { ButtonBase } from './ButtonBase';
import * as classes from './Button.scss';

export const Button = compose2(ButtonBase, {
  displayName: 'Button2',
  useHooks: [createUseClasses(classes)],
});
