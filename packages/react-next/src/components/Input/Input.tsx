import { compose, createClassResolver } from '@fluentui/react-compose';
import { InputBase } from './InputBase';
import * as classes from './Input.scss';
import { InputProps } from './Input.types';

export const Input = compose<'input', InputProps, {}, {}, {}>(InputBase, {
  classes: createClassResolver(classes),
});
