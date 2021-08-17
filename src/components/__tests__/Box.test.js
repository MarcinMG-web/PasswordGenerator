import { fireEvent, render, screen } from '@testing-library/react';

import Box from '../Box';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const MockBox = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box />
      </BrowserRouter>
    </Provider>
  );
};

describe('Box tests - layout', () => {
  it('render without crashing box', async () => {
    render(<MockBox />);
  });

  it('should render input range Length password:', async () => {
    render(<MockBox />);

    const inputRangeLengthPassword = screen.getByText('Length password:');

    expect(inputRangeLengthPassword).toBeInTheDocument();
  });

  it('should render input checkbox Include Letters:', async () => {
    render(<MockBox />);

    const inputIncludeLetters = screen.getByText('Include Letters:');

    expect(inputIncludeLetters).toBeInTheDocument();
  });

  it('should render input checkbox Include Uppercase:', async () => {
    render(<MockBox />);

    const inputIncludeUppercase = screen.getByText('Include Uppercase:');

    expect(inputIncludeUppercase).toBeInTheDocument();
  });

  it('should render input checkbox Include Numbers:', async () => {
    render(<MockBox />);

    const inputIncludeNumbers = screen.getByText('Include Numbers:');

    expect(inputIncludeNumbers).toBeInTheDocument();
  });

  it('should render input checkbox Include Symbols:', async () => {
    render(<MockBox />);

    const inputIncludeSymbols = screen.getByText('Include Symbols:');

    expect(inputIncludeSymbols).toBeInTheDocument();
  });

  it('should render input Your name password:', async () => {
    render(<MockBox />);

    const inputYourNamePassword = screen.getByText('Your name password:');

    expect(inputYourNamePassword).toBeInTheDocument();
  });

  it('should render input Your generated password:', async () => {
    render(<MockBox />);

    const inputYourGeneratedPassword = screen.getByText(
      'Your generated password:'
    );

    expect(inputYourGeneratedPassword).toBeInTheDocument();
  });

  it('should render button Created:', async () => {
    render(<MockBox />);

    const buttonCreated = screen.getByRole('button', { name: 'Create' });

    expect(buttonCreated).toBeInTheDocument();
  });

  it('should render button Save password:', async () => {
    render(<MockBox />);

    const buttonSavePassword = screen.getByRole('button', {
      name: 'Save password',
    });

    expect(buttonSavePassword).toBeInTheDocument();
  });

  it('should render link Move to the save password:', async () => {
    render(<MockBox />);

    const linkMoveToTheSavePassword = screen.getByText(
      'Move to the save password'
    );

    expect(linkMoveToTheSavePassword).toBeInTheDocument();
  });

  it('should render link Check Your Password:', async () => {
    render(<MockBox />);

    const linkCheckYourPassword = screen.getByText('Check Your Password');

    expect(linkCheckYourPassword).toBeInTheDocument();
  });
});

describe('Box tests - action', () => {
  it('action after click Create button', () => {
    render(<MockBox />);

    const buttonCreated = screen.getByRole('button', { name: 'Create' });

    fireEvent.click(buttonCreated);

    const textAfterClick = screen.getByText('Set the opportunities');

    expect(textAfterClick).toBeInTheDocument();
  });

  it('action after click Save password button', () => {
    render(<MockBox />);

    const buttonCreated = screen.getByRole('button', { name: 'Create' });

    fireEvent.click(buttonCreated);

    const buttonSavePassword = screen.getByRole('button', { name: 'Save password' });

    fireEvent.click(buttonSavePassword);

    const textAfterClick = screen.getByText('Set the opportunities');

    expect(textAfterClick).toBeInTheDocument();
  });
});
