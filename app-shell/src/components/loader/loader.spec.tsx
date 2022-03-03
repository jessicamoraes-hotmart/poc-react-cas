import React from 'react'
import { render, screen } from '@testing-library/react';
import Loader from './loader.component';

describe('Test Loader Component', () => {
  test('expect test compatible with web components', () => {
    render(<Loader />);
    screen.getByTestId('hot-loading');
  });
});
