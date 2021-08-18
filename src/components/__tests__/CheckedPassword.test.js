import { fireEvent, render, screen } from '@testing-library/react';

import CheckPassword from '../CheckPassword';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const MockCheckPassword = () => {
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
    render(<MockCheckPassword />);
  });

  it('render input to check password', async () => {
    render(<MockCheckPassword />);

    const checkPasswordInput = screen.getByPlaceholderText('Check here...');

    expect(checkPasswordInput).toBeInTheDocument();
  });

  it('render spinier', async () => {
    render(<MockCheckPassword />);

    const spinner = screen.getByTestId('spinner-test');

    expect(spinner).toBeInTheDocument();
  });

  it('render link back', async () => {
    render(<MockCheckPassword />);

    const linkBack = screen.getByText('Back');

    expect(linkBack).toBeInTheDocument();
  });
});

describe('Check password tests - action', () => { 
  it('render massage element - p after too short password', async () => {
    render(<MockCheckPassword />);

    const checkPasswordInput = screen.getByPlaceholderText('Check here...');
    fireEvent.change(checkPasswordInput, { target: { value: '123' } });

    const renderText = await screen.findAllByTestId(/shortPassword-test/i);
    
    expect(renderText.length).toBe(1);
  });

})