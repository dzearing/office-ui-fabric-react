import * as React from 'react';
import { Image as ImageFabric } from 'office-ui-fabric-react';
import { Image as ImageFluent } from '@fluentui/react-experimental';

export default {
  iterations: 5000
};

export const Fabric = () => <ImageFabric />;
export const Fluent = () => <ImageFluent />;
