import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ShimmeredDetailsList } from './ShimmeredDetailsList';

// Populate mock items for testing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mockItems(count: number): any {
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push({
      key: i,
      name: 'Item ' + i,
      value: i,
    });
  }

  return items;
}

describe('ShimmeredDetailsList', () => {
  it('renders List correctly', () => {
    const component = renderer.create(
      <ShimmeredDetailsList
        items={mockItems(5)}
        onRenderRow={() => null}
        enableShimmer={true}
        skipViewportMeasures={true}
        onShouldVirtualize={() => false}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
