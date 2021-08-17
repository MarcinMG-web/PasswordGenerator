import { fireEvent, render, screen } from '@testing-library/react';

import CheckPassword from '../CheckPassword';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const MockBox = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CheckPassword />
      </BrowserRouter>
    </Provider>
  );
};

describe('Check password tests - layout', () => {
  it('render without crashing box', async () => {
    render(<MockBox />);
  });

  
})