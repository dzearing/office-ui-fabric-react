import { IObjectWithKey } from 'office-ui-fabric-react/lib-es2015/Selection';
import { IGenericListProps } from './List.types';

export interface IStaticListProps<TItem extends IObjectWithKey> extends IGenericListProps<TItem> {
  /** Html tag to use for rendering the list, defaults to 'ul' */
  listTagName?: string;
}
