import * as React from 'react';
import {
  BaseComponent,
  classNamesFunction,
  css,
  customizable,
  format,
  getId
} from '../../Utilities';
import {
  IClassNames
} from '@uifabric/utilities/lib/IClassNames';
import { RatingSize } from './Rating.types';
import { IRatingStarProps } from './RatingStar.view';
import { IRatingViewProps, IRatingStyles } from './Rating.view';
import { RatingStar } from './RatingStar';
import { createRef } from './createRef';

export declare type IComponentAs<TProps> = React.StatelessComponent<TProps> | React.ComponentClass<TProps>;

export interface IRating {
  focus: () => void;
}

export interface IRatingProps {
  // Public interface
  componentRef?: (ref: IRating) => void;

  id?: string;

  getStyles?: (props: IRatingViewProps) => Partial<IRatingStyles>;

  // Standard props
  className?: string;

  // Rating value
  defaultValue?: number;
  value?: number;
  onChange?: (ev: React.SyntheticEvent<HTMLButtonElement>, value: number) => void;

  ariaLabel?: string;

  max?: number;
  iconName?: string;

  // Flags
  readOnly?: boolean;
  disabled?: boolean;
  large?: boolean;

  // Overrides
  ratingStarAs?: (props: IRatingStarProps) => JSX.Element | null;

  // Data attributes per area.
  dataAttributes?: Partial<{
    root: { [key: string]: string };
    stars: { [key: string]: string }[];
  }>;

}

export class RatingState extends BaseComponent<IRatingProps, IRatingViewProps> implements IRating {

  private _focusRef = createRef<IRating>();

  public static getDerivedStateFromProps(
    nextProps: IRatingProps,
    prevState?: IRatingViewProps
  ): Pick<IRatingViewProps, any> {

    return ({
      value: ((nextProps.value !== undefined) ? nextProps.value : prevState && prevState.value) || 0,
    });
  }

  constructor(props: IRatingProps) {
    super(props);

    this.state = {
      ...RatingState.getDerivedStateFromProps(props),
      value: props.defaultValue !== undefined ? props.defaultValue : props.value,
      onRatingSelected: this._onRatingSelected,
      focusRef: this._focusRef
    };
  }

  public componentWillReceiveProps(nextProps: IRatingProps) {
    this.setState(RatingState.getDerivedStateFromProps(nextProps, this.state));
  }

  public render() {
    const children = this.props.children as (props: IRatingViewProps) => JSX.Element;

    return children(this.state);
  }

  public focus(): void {
    if (this._focusRef.value) {
      this._focusRef.value.focus();
    }
  }

  private _onRatingSelected = (value: number): void => {
    this.setState({ value });
  }
}
