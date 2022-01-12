import React from 'react';
import renderer from 'react-test-renderer';
import NotMatch from '../../components/notMatch/NotMatch'

it('renders correctly', () => {
  const tree = renderer
    .create(<NotMatch />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



