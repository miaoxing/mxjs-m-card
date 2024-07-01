import Card from '..';
import {render} from '@testing-library/react';

describe('Card', () => {
  test('basic', () => {
    const {container} = render(<Card/>);
    expect(container).toMatchSnapshot();
  });
});
