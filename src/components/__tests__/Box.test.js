import { render, screen } from '@testing-library/react';

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

describe('Box tests', () => {
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

     const inputYourGeneratedPassword= screen.getByText('Your generated password:');

     expect(inputYourGeneratedPassword).toBeInTheDocument();
   });
});
