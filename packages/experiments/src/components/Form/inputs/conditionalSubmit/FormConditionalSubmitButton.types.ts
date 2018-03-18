
import { IBaseProps } from 'office-ui-fabric-react/lib-es2015/Utilities';
import { IButtonProps } from 'office-ui-fabric-react/lib-es2015/Button';

export { IButtonProps };

export interface IFormConditionalSubmitButtonProps extends IBaseProps {
  /** Props for the fabric button */
  buttonProps?: IButtonProps;
}
