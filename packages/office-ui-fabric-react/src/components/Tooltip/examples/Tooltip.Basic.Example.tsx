/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { BaseComponent } from 'office-ui-fabric-react/lib-es2015/Utilities';
import { DefaultButton } from 'office-ui-fabric-react/lib-es2015/Button';
import {
  TooltipHost
} from 'office-ui-fabric-react/lib-es2015/Tooltip';

export class TooltipBasicExample extends BaseComponent<any, any> {

  public render() {
    return (
      <div>
        <TooltipHost content='This is the tooltip' id='myID' calloutProps={ { gapSpace: 0 } }>
          <DefaultButton aria-describedby='myID'>Hover Over Me</DefaultButton>
        </TooltipHost>
      </div>
    );
  }
}