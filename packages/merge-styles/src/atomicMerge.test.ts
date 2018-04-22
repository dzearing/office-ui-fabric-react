import { mergeStyleSets } from './atomicMerge';
import { Stylesheet, InjectionMode } from './Stylesheet';

const _stylesheet: Stylesheet = Stylesheet.getInstance();

describe('mergeStyleSets', () => {

  beforeEach(() => {
    _stylesheet.setConfig({ injectionMode: InjectionMode.none });
    _stylesheet.reset();
  });

  it('can register styles', () => {
    const result = mergeStyleSets({
      root: [
        'global classes',
        {
          backgroundColor: 'red',
          color: 'white',
          margin: 10,
          selectors: {
            ':hover': {
              backgroundColor: 'green'
            }
          }
        }
      ],
      child: {
        backgroundColor: 'red'
      }
    });

    expect(result.root).toEqual('global classes a b c d e f g');
    expect(result.child).toEqual('a');
    expect(_stylesheet.getRules()).toEqual(
      '.a{background-color:red}' +
      '.b{color:white}' +
      '.c{margin-top:10px}' +
      '.d{margin-right:10px}' +
      '.e{margin-bottom:10px}' +
      '.f{margin-left:10px}' +
      '.g:hover{background-color:green}'
    );
  });

  it('can expand rules', () => {
    let result = mergeStyleSets({ root: { background: 'red' } });

    expect(result.root).toEqual('a');

    result = mergeStyleSets({ root: result.root });

    expect(result.root).toEqual('a');
  });

});
