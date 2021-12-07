import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders button with blue background', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Change color to red/i });
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' })



});
test('button color changes to red', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Change color to red/i });
  const disableBtnElement = screen.getByRole('button', {
    name: /EnableDisable/i
  })
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(disableBtnElement)
  expect(disableBtnElement).toBeDisabled();
})
