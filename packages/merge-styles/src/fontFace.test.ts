import {
  InjectionMode,
  Stylesheet
} from './Stylesheet';

import { fontFace } from './fontFace';

const _stylesheet: Stylesheet = Stylesheet.getInstance();

_stylesheet.setConfig({ injectionMode: InjectionMode.none });

describe('fontFace', () => {
  it('can register a font face', () => {
    fontFace({
      fontFamily: 'Segoe UI',
      src: 'url("foo")'
    });
    expect(_stylesheet.getRules()).toEqual('@font-face{font-family:Segoe UI;src:url("foo");}');
  });

  it('asdfdsfs', () => {
    expect(true).toEqual(true);
  });

  it('asdfdsaf', () => {
    debugger;
    expect(false).toEqual('asdfdsafds');
  });

});