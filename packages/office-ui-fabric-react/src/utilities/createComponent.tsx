import * as React from 'react';
import { mergeStyleSets, ITheme } from '../Styling';
import { IClassNames, IStyleFunction } from '../Utilities';

export declare type IPropsWithTheme<TProps> = TProps & { theme: ITheme };
export declare type IPropsWithGetStyles<TProps, TStyles> = TProps & { getStyles: IStyleFunction<IPropsWithTheme<TProps>, TStyles> };
export declare type IPropsWithStyles<TProps, TStyles> = TProps & { styles: IClassNames<TStyles> };

export interface ICreateComponentOptions<TExternalProps, TStyles, TViewProps> {
  displayName?: string;
  state?: React.ComponentClass<TExternalProps>;
  styles: (props: IPropsWithTheme<TViewProps>) => Partial<TStyles>;
  view:
  React.StatelessComponent<IPropsWithStyles<TExternalProps | TViewProps, TStyles>> |
  React.ComponentClass<IPropsWithStyles<TExternalProps | TViewProps, TStyles>>;
  context?: string[];
  defaultProps?: Partial<TExternalProps | TViewProps>;
}

export function createComponent<
  TExternalProps extends {}, // extends IPropsWithStyling<TViewProps, TStyles>,
  TStyles,
  TViewProps extends {} = TExternalProps
  >(
  options: ICreateComponentOptions<TExternalProps, TStyles, TViewProps>
  ): (props: TExternalProps) => JSX.Element | null {

  const {
    displayName,
    state: StateComponent,
    styles: getComponentStyles,
    view: ViewComponent,
  } = options;

  // Create the function which resolves
  let resultComponent: (props: TExternalProps) => JSX.Element | null;
  // tslint:disable-next-line:no-any
  const previewComponent = resultComponent = (props: any) => {
    const { getStyles } = props as any;
    const styles: IClassNames<TStyles> = mergeStyleSets(
      getStyles && getStyles(props),
      getComponentStyles && getComponentStyles(props)
    );

    return <ViewComponent { ...props } styles={ styles } />;
  };

  // If a state component is provided, the result should return the state component
  // which should then pass the props into the view component.
  if (StateComponent) {
    resultComponent = (externalProps: TExternalProps) => {
      return (
        <StateComponent { ...externalProps }>
          { previewComponent }
        </StateComponent>
      );
    };
  }

  // tslint:disable-next-line:no-any
  (resultComponent as any).displayName = displayName;

  return resultComponent;
}

/////////////////////////// TEST

// interface IFooViewProps {
//   collapsed?: boolean;
// }

// interface IFooStyles {
//   root: {};
// }

// const FooView = (props: IPropsWithStyles<IFooViewProps, IFooStyles>) => (
//   <div>{ props.styles.root }</div>
// );

// const FooViewStyles = (props: IPropsWithTheme<IFooViewProps>): IFooStyles => ({
//   root: {}
// });

// const Foo = createComponent<IFooViewProps, IFooStyles>({
//   view: FooView,
//   styles: FooViewStyles
// });

// const foo = (
//   <Foo collapsed />
// );
