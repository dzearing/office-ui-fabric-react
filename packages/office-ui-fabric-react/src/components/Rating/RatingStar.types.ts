import { IStyle } from '../../Styling';

export interface IRatingStarProps {
  fillPercentage: number;
  disabled?: boolean;
  iconName?: string;
  onRatingClick: (index: number) => void;
  index: number;
  max: number;
}

export interface IRatingStarStyles {
  root: IStyle;
  backgroundIcon: IStyle;
  foregroundIcon: IStyle;
}
