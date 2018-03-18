import { IObjectWithKey } from 'office-ui-fabric-react/lib-es2015/Selection';

export interface IGenericListProps<TItem extends IObjectWithKey> {
  /** Optional custom class name */
  className?: string;

  /** List of items to render */
  items: TItem[];

  /** Height of one item in the list */
  itemHeight: number;

  /** Callback to render one item in the list */
  onRenderItem: (item: TItem, index: number) => JSX.Element | null;
}