import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack } from '@fluentui/react/lib/Stack';

// tslint:disable:jsx-no-lambda
export class SearchBoxDisabledExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <Stack tokens={{ childrenGap: 20 }}>
        <SearchBox
          placeholder="Search"
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
          disabled
        />

        <SearchBox
          placeholder="Search"
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
          underlined={true}
          disabled
        />
      </Stack>
    );
  }
}
