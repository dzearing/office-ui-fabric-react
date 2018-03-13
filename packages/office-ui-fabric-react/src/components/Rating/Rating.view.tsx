import * as React from 'react';
import { IPropsWithStyles } from '../../utilities/createComponent';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { IStyle } from '../../Styling';
import { IRatingStarProps } from './RatingStar.types';
import { IRatingProps } from './Rating.state';

export type IDataAttribute = { [key: string]: string };

export interface IRatingViewProps extends IRatingProps {
  focusRef: (ref: { focus: () => void; }) => void;
  onRatingSelected: (value: number) => void;
}

export interface IRatingStyles {
  root: IStyle;
  starButton: IStyle;
}

export const RatingView = (props: IPropsWithStyles<IRatingViewProps, IRatingStyles>) => {
  const {
    ariaLabel,
    dataAttributes = {},
    disabled,
    focusRef,
    readOnly,
    id,
    iconName,
    max = 5,
    ratingStarAs: RatingStar = (ratingStarProps: IRatingViewProps) => null,
    styles,
    value,
    onRatingSelected

  } = props;
  const { root = {}, stars = [] } = dataAttributes;
  return (
    <FocusZone
      { ...root }
      componentRef={ focusRef }
      id={ id }
      className={ styles.root }
      aria-label={ ariaLabel }
      direction={ FocusZoneDirection.horizontal }
      defaultActiveElement={ '#' + id + '-' + value }
      disabled={ disabled || readOnly }
    >
      { [...Array(max)].map((a: void, index: number) => (
        <RatingStar
          iconName={ iconName }
          fillPercentage={ _calcFillPercentage(index, max) }
          disabled={ disabled }
          id={ '#' + id + '-' + index }
          index={ index }
          max={ max }
          focusRef={ focusRef }
          onRatingSelected={ onRatingSelected }
        />
      )) }
    </FocusZone>
  );
};

function _optionalContainer(condition: boolean, container: JSX.Element): JSX.Element | null {
  return condition ? container : React.Children.only(container.props);
}

function _calcFillPercentage(value: number, max: number): number {
  if (value === 0) {
    return 0;
  }

  return (value <= (max - 1)) ? 1 : max - value - (max - 1);
}