import { render, screen } from '@testing-library/react';
import Home from '@app/(company)/page';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByRole } = render(<Home />);
    const heading = screen.getByRole('heading', { name: 'Welcome to Next.js!' });
    expect(heading).toBeInTheDocument(); 
  });
});

