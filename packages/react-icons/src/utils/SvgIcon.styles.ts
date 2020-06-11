import { ISvgIconStyles } from './SvgIcon.types';
import { mergeStyleSets } from '@uifabric/styling';

export interface ISvgIconStyleProps {
  className?: string;
  styles?: Partial<ISvgIconStyles>;
}

/** Class names used in themeable and non-themeable Icon components */
export const classes = mergeStyleSets({
  root: {
    display: 'inline-block',
    height: '100%',
    boxSizing: 'border-box',
    lineHeight: '1',
  },
  svg: {
    height: '100%',
    width: 'auto',
    fill: 'currentColor',
  },
});

export const getStyles = (props: ISvgIconStyleProps): ISvgIconStyles => {
  const { className, styles } = props;

  return {
    root: [classes.root, className, styles && styles.root],
    svg: [classes.svg],
  };
};
