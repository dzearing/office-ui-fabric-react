import { ITheme } from '../../Styling';
import { IVerticalDividerStyleProps, IVerticalDividerStyles } from './VerticalDivider.types';

export const getStyles = (props: IVerticalDividerStyleProps): IVerticalDividerStyles => ({
  wrapper: {
    display: 'inline-flex',
    height: '100%',
    alignItems: 'center'
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: props.theme.palette.neutralTertiaryAlt
  }
});