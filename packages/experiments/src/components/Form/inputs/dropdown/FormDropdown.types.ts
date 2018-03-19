import { IDropdownProps } from 'office-ui-fabric-react';
import { IFormBaseInputProps } from '../../FormBaseInput';
export { IDropdownProps };

export interface IFormDropdownProps extends IFormBaseInputProps<number | string> {
  /** Props for the Dropdown component */
  dropdownProps?: IDropdownProps;
}