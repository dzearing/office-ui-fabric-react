import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { LabelPageProps as ExternalProps } from '@fluentui/react/lib/components/Label/Label.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/LabelPage/docs/LabelRelated.md') as string;

export const LabelPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related
  }
};
