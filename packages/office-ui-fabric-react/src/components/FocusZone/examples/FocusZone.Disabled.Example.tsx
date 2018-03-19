/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import { DefaultButton } from 'office-ui-fabric-react/lib-es2015/Button';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib-es2015/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib-es2015/TextField';
import './FocusZone.Disabled.Example.scss';

export const FocusZoneDisabledExample = () => (
  <div className='ms-FocusZoneDisabledExample'>
    <div className='ms-Row'>
      <FocusZone direction={ FocusZoneDirection.horizontal }>
        <span>Enabled FocusZone: </span>
        <DefaultButton>Button 1</DefaultButton>
        <DefaultButton>Button 2</DefaultButton>
        <TextField value='FocusZone TextField' className='ms-FocusZoneDisabledExample-textField' />
        <DefaultButton>Button 3</DefaultButton>
      </FocusZone>
    </div>
    <div className='ms-Row'>
      <DefaultButton>Tabbable Element 1</DefaultButton>
    </div>
    <div className='ms-Row'>
      <FocusZone disabled={ true }>
        <span>Disabled FocusZone: </span>
        <DefaultButton>Button 1</DefaultButton>
        <DefaultButton>Button 2</DefaultButton>
      </FocusZone>
    </div>
    <div className='ms-Row'>
      <TextField value='Tabbable Element 2' />
    </div>
  </div>
);
