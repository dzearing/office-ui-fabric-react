import * as React from 'react';
import { Icon } from '../../Icon';
import { IStyle } from '../../Styling';

import { IClassNames } from '../../Utilities';

export type IStyles<TStyles> = {
  styles: IClassNames<TStyles>;
};

export interface IRatingStarProps {
  fillPercentage: number;
  onRatingSelected: (index: number) => void;
  index: number;
  max: number;
  disabled?: boolean;
  readonly?: boolean;
  iconName?: string;
}

export interface IRatingStarStyles {
  root: IStyle;
  backgroundIcon: IStyle;
  foregroundIcon: IStyle;
}

export class RatingStarView extends React.PureComponent<IRatingStarProps & IStyles<IRatingStarStyles>> {
  public render(): JSX.Element {
    const {
    iconName = 'FavoriteStarFill',
      disabled,
      fillPercentage,
      styles,
      onRatingSelected
  } = this.props;

    return (
      <button
        type='button'
        className={ styles.root }
        onClick={ this._onClick }
      >
        <Icon
          className={ styles.backgroundIcon }
          iconName={ iconName }
        />
        { !disabled && (
          <Icon
            className={ styles.foregroundIcon }
            iconName={ iconName }
            style={ { width: fillPercentage + '%' } }
          />
        ) }
      </button>
    );
  }

  private _onClick = () => {
    const { onRatingSelected, index } = this.props;

    onRatingSelected(index);
  }
}
