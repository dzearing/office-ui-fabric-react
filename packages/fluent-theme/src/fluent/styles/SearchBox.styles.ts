import { ISearchBoxStyleProps, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';

export const SearchBoxStyles = (props: ISearchBoxStyleProps): Partial<ISearchBoxStyles> => {
  const { theme } = props;
  const { effects, palette } = theme;

  return {
    root: [
      {
        borderRadius: effects.roundedCorner2,
        borderColor: palette.neutralSecondaryAlt
      }
    ]
  };
};
