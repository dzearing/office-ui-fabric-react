import * as React from 'react';
import * as _ from 'lodash';
import { Segment, ProviderConsumer } from '@fluentui/react-experimental';

const SegmentExampleColor = () => (
  <ProviderConsumer
    render={({ siteVariables: { contextualColors, naturalColors } }) =>
      _.keys({ ...contextualColors, ...naturalColors }).map(color => (
        <Segment key={color} color={color} inverted>
          {_.startCase(color)}
        </Segment>
      ))
    }
  />
);

export default SegmentExampleColor;
