import { IDatePickerProps } from 'office-ui-fabric-react';
import { IFormBaseInputProps } from '../../FormBaseInput';
export { IDatePickerProps };

export interface IFormDatePickerProps extends IFormBaseInputProps<Date> {
  /** Props for the Fabric date picker */
  datePickerProps?: IDatePickerProps;
}