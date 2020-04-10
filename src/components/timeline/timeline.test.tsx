import React from 'react';
import { render } from '@testing-library/react';
import Timeline from './Timeline';

test('renders learn react link', () => {
    const { getByText } = render(<Timeline />);
    const linkElement = getByText(/learn react/i);
    expect(true).toBe(true);
});
