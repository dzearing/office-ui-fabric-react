import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  CommandBar,
  ContextualMenuItemType,
  Customizer,
  DefaultButton,
  ICommandBarStyles
} from 'office-ui-fabric-react';

export class CommandBarBasicExample extends React.Component<{}> {
  public render() {
    return (
      <Customizer
        scopedSettings={{
          ContextualMenuItem: {
            styles: {
              root: {
                backgroundColor: 'red'
              },
              rootHovered: {
                backgroundColor: '#8b8cc7',
                color: '#fff'
              },
              divider: {
                marginTop: 4,
                marginBottom: 4
              }
            }
          },
          CommandBar: {
            styles: {
              root: {
                backgroundColor: 'red',
                background: 'red',
                border: '2px solid blue'
              }
            } as ICommandBarStyles
          },
          CommandBarButton: {
            root: {
              background: 'inherit !important',
              border: '5px solid black'
            }
          }
        }}
      >
        <div>
          <div>hello world</div>
          <button>button</button>
          <CommandBar items={[{ name: 'asdf', key: 'asdf' }, { name: 'asaqwe', key: 'lolsd' }]} />
          <DefaultButton
            id="ContextualMenuButton1"
            text="Click for ContextualMenu"
            menuProps={{
              shouldFocusOnMount: true,
              items: [
                {
                  key: 'newItem',
                  text: 'New',
                  onClick: () => console.log('New clicked')
                },
                {
                  key: 'divider_1',
                  itemType: ContextualMenuItemType.Divider
                },
                {
                  key: 'rename',
                  text: 'Rename',
                  onClick: () => console.log('Rename clicked')
                },
                {
                  key: 'edit',
                  text: 'Edit',
                  onClick: () => console.log('Edit clicked')
                },
                {
                  key: 'properties',
                  text: 'Properties',
                  onClick: () => console.log('Properties clicked')
                },
                {
                  key: 'linkNoTarget',
                  text: 'Link same window',
                  href: 'http://bing.com'
                },
                {
                  key: 'linkWithTarget',
                  text: 'Link new window',
                  href: 'http://bing.com',
                  target: '_blank'
                },
                {
                  key: 'linkWithOnClick',
                  name: 'Link click',
                  href: 'http://bing.com',
                  onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                    alert('Link clicked');
                    ev.preventDefault();
                  },
                  target: '_blank'
                },
                {
                  key: 'disabled',
                  text: 'Disabled item',
                  disabled: true,
                  onClick: () => console.error('Disabled item should not be clickable.')
                }
              ]
            }}
          />
        </div>
      </Customizer>
    );
  }
}

ReactDOM.render(<CommandBarBasicExample />, document.getElementById('content'));
