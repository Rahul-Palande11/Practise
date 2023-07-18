// SimpleComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';

test('renders component correctly', () => {
  const { getByText } = render(<SimpleComponent />);
  const headingElement = getByText(/Hello, React!/i);
  expect(headingElement).toBeInTheDocument();
});
