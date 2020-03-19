import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { PeoplePickerPageProps as ExternalProps } from '@fluentui/react/lib/components/pickers/PeoplePicker/PeoplePicker.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PeoplePickerPage/docs/PeoplePickerRelated.md') as string;
const componentUrl =
  'https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/react/current/src/components/pickers/PeoplePicker';

export const PeoplePickerPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
    componentUrl
  },
  android: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PeoplePickerPage/docs/android/PeoplePickerOverview.md') as string,
    related,
    componentUrl
  }
};
