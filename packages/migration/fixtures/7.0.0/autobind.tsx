import { Foo } from 'bar';

import { IBaseProps, autobind } from '@fluentui/react/lib/Utilities';

class Foo {
  @autobind
  private _foo() {
    return 'bar';
  }
}
