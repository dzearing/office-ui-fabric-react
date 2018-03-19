import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib-es2015/SearchBox';

// tslint:disable:jsx-no-lambda

export class SearchBoxFullSizeExample extends React.Component<any, any> {
  public render() {
    return (
      <SearchBox
        placeholder='Search'
        onFocus={ () => console.log('onFocus called') }
        onBlur={ () => console.log('onBlur called') }
        onChange={ () => console.log('onChange called') }
      />
    );
  }

}
