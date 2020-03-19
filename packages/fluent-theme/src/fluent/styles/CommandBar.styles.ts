import { ICommandBarStyleProps, ICommandBarStyles } from '@fluentui/react/lib/CommandBar';

export const CommandBarStyles = (props: ICommandBarStyleProps): Partial<ICommandBarStyles> => {
  const { theme } = props;
  const { palette } = theme;

  return {
    root: [
      {
        height: 44,
        padding: '0 14px 0 24px',
        backgroundColor: palette.white
      }
    ]
  };
};
