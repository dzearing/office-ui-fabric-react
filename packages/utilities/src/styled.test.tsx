import * as React from 'react';
import { styled } from './styled';
import * as renderer from 'react-test-renderer';
import { Customizer } from './Customizer';
import { IStyle, Stylesheet, InjectionMode, IStyleFunctionOrObject } from '@uifabric/merge-styles';
import { classNamesFunction } from './classNamesFunction';
import { memoizeFunction } from './memoize';

interface ITestStyles {
  root: IStyle;
}
interface ITestProps {
  cool?: boolean;
  styles?: IStyleFunctionOrObject<{}, ITestStyles>;
}

let _lastProps: ITestProps | undefined;
let _getStylesCount = 0;

const getClassNames = classNamesFunction<{}, ITestStyles>();

class TestBase extends React.Component<ITestProps> {
  public constructor(props: ITestProps) {
    super(props);
  }
  public render(): JSX.Element {
    _lastProps = this.props;
    const classNames = getClassNames(this.props.styles, this.props);

    return <div className={classNames.root} />;
  }
}

const getStyles = (props: ITestProps): ITestStyles => {
  _getStylesCount++;

  return {
    root: {
      background: props.cool ? 'blue' : 'red'
    }
  };
};

const getMemoizedStyles = memoizeFunction((cool?: boolean) => {
  _getStylesCount++;
  return {
    root: {
      background: cool ? 'blue' : 'red'
    }
  };
});

const Test = styled<ITestProps, {}, ITestStyles>(TestBase, getStyles, undefined, { scope: 'Test' });
const TestCached = styled<ITestProps, {}, ITestStyles>(TestBase, (props: ITestProps) => getMemoizedStyles(props.cool), undefined, {
  scope: 'Test'
});

describe('styled', () => {
  beforeEach(() => {
    _lastProps = undefined;
    _getStylesCount = 0;
    Stylesheet.getInstance().setConfig({
      injectionMode: InjectionMode.none
    });
    Stylesheet.getInstance().reset();
  });

  it('renders base styles (background red)', () => {
    const component = renderer.create(<Test />);

    // Test that defaults are the base styles (red).
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('allows user overrides (background green)', () => {
    const component = renderer.create(<Test styles={{ root: { background: 'green' } }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('allows for contextual overrides (background yellow)', () => {
    const component = renderer.create(
      <Customizer
        scopedSettings={{
          Test: {
            styles: {
              root: {
                background: 'yellow'
              }
            }
          }
        }}
      >
        <Test />
      </Customizer>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('allows for contextual overrides mixed under user overrides (background yellow, color red)', () => {
    const component = renderer.create(
      <Customizer
        scopedSettings={{
          Test: {
            styles: {
              root: {
                background: 'yellow'
              }
            }
          }
        }}
      >
        <Test styles={{ root: { color: 'red' } }} />
      </Customizer>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('can process style props (background blue)', () => {
    const component = renderer.create(<Test cool />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('can produce different styles object if not cached', () => {
    const component = renderer.create(<Test cool />);
    const originStyles = _lastProps!.styles;

    component.update(<Test cool />);
    expect(_lastProps!.styles).not.toBe(originStyles);
  });

  it('can produce same styles object if cached', () => {
    const component = renderer.create(<TestCached cool />);
    expect(component.toJSON()).toMatchSnapshot();
    expect(_getStylesCount).toEqual(1);

    // Calling again does not re-evaluate styles.
    component.update(<TestCached cool />);
    expect(component.toJSON()).toMatchSnapshot();
    expect(_getStylesCount).toEqual(1);

    // Not passing in "cool" should cause re-evaluation of styles.
    component.update(<TestCached />);
    expect(component.toJSON()).toMatchSnapshot();
    expect(_getStylesCount).toEqual(2);

    // Passing the same props in again should skip re-evaluation.
    component.update(<TestCached />);
    expect(component.toJSON()).toMatchSnapshot();
    expect(_getStylesCount).toEqual(2);

    // Passing in custom styling should not re-evaluate memoized styles.
    const styles = { root: { color: 'red' } };
    component.update(<TestCached cool styles={styles} />);
    expect(component.toJSON()).toMatchSnapshot();
    expect(_getStylesCount).toEqual(2);
  });
});
