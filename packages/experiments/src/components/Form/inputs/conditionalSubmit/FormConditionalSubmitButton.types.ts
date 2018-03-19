
import { IBaseProps } from 'office-ui-fabric-react';
import { IButtonProps } from 'office-ui-fabric-react';

export { IButtonProps };

export interface IFormConditionalSubmitButtonProps extends IBaseProps {
  /** Props for the fabric button */
  buttonProps?: IButtonProps;
}
