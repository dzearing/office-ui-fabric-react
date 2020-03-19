import * as React from 'react';
import { FontIcon as IconFabric, initializeIcons } from '@fluentui/react';
import { Icon as IconFluent } from '@fluentui/react-northstar';

initializeIcons();

export default {
  iterations: 5000
};

export const Fabric = () => <IconFabric iconName="cancel" />;
export const Fluent = () => <IconFluent name="close" />;
