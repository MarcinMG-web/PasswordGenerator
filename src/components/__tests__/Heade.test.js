import { render } from '@testing-library/react';

import Header from '../Header';

describe('Header tests', () => {
  it('render without crashing header', async () => {
    render(<Header />);
  });

it('text Password generator in component', () => {
  const display = render(<Header />);
   display.getAllByText('Password generator');
  });
}); 


