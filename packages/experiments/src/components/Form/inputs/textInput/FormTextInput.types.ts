
import { IFormBaseInputProps } from '../../FormBaseInput';
import { ITextFieldProps } from 'office-ui-fabric-react/lib-es2015/TextField';

export { ITextFieldProps };

export interface IFormTextInputProps extends IFormBaseInputProps<string> {
  /** Props for the TextField component */
  textFieldProps?: ITextFieldProps;
}
