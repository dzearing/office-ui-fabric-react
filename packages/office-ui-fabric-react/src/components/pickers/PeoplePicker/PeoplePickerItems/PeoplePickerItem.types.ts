import { IPersonaProps } from '../../../../Persona';
import { IPickerItemProps } from '../../PickerItem.types';
import { IContextualMenuItem } from '../../../../ContextualMenu';
import { ValidationState } from '../../BasePicker.types';
export interface IPeoplePickerItemProps extends IPickerItemProps<IPersonaProps & { ValidationState: ValidationState }> {
}

export interface IPeoplePickerItemWithMenuProps extends IPickerItemProps<IPersonaWithMenuProps> {
  item: IPersonaWithMenuProps;
}

export interface IPersonaWithMenuProps extends IPersonaProps {
  menuItems?: IContextualMenuItem[];
}