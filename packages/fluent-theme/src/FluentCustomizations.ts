import { FluentTheme } from './fluent/FluentTheme';
import { FluentStyles } from './fluent/FluentStyles';
import { ICustomizations } from '@fluentui/react';
import { addVariants } from '@uifabric/variants';

export const FluentCustomizations: ICustomizations = {
  settings: {
    theme: { ...FluentTheme }
  },
  scopedSettings: { ...FluentStyles }
};

addVariants(FluentCustomizations.settings.theme);
