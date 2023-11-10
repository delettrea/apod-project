import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Header from '../src/components/Header.tsx';
import '@testing-library/jest-dom'


describe('Header', () => {
  it('should return a title and a description', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toHaveTextContent('Astronomy Picture of the Day');
    expect(screen.getByText("Chaque jour la NASA publie une photo d'astronomie pour en savoir plus sur notre univers.Vous retrouverez sur ce site les photos partagées par la NASA.")).toBeInTheDocument();
  })
});