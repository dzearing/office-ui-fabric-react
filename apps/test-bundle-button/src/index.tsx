import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultButton } from 'office-ui-fabric-react';
// import { initializeIcons } from '@uifabric/icons';

function start(): void {
  // initializeIcons();

  const div: HTMLElement = document.createElement('div');

  document.body.appendChild(div);
  ReactDOM.render((
    <DefaultButton
      iconProps={ { iconName: 'Add' } }
      text='hi'
      menuProps={ {
        items: [
          { key: 'a', name: 'Item a' },
          { key: 'c', name: 'Item b' },
          { key: 'b', name: 'Item c' },
        ]
      } }
    />
  ), div);
}

// tslint:disable-next-line:no-string-literal
if (document && document['body']) {
  start();
} else {
  window.onload = start;
}
