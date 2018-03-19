import { IFormBaseInputProps } from '../../FormBaseInput';
import { ICheckboxProps } from 'office-ui-fabric-react';
export { ICheckboxProps };

export interface IFormCheckBoxProps extends IFormBaseInputProps<boolean> {
  /** Extra props for the Fabric checkbox */
  checkboxProps?: ICheckboxProps;
}