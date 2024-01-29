import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from '@app/(company)/page';

describe('Home', () => {
  it('renders the banner section', () => {
    render(<Home />);
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });

  it('renders the mini project card section', () => {
    render(<Home />);
    const miniProjectCard = screen.getByRole('complementary', { name: 'Mini Project Card' });
    expect(miniProjectCard).toBeInTheDocument();
  });

  it('renders the main projects section', () => {
    render(<Home />);
    const mainProjects = screen.getByRole('complementary', { name: 'Main Projects' });
    expect(mainProjects).toBeInTheDocument();
  });

  it('renders the "Get More Done" section', () => {
    render(<Home />);
    const moreDone = screen.getByRole('complementary', { name: 'Get More Done' });
    expect(moreDone).toBeInTheDocument();
  });

  it('renders the "Getting Done" section', () => {
    render(<Home />);
    const gettingDone = screen.getByRole('complementary', { name: 'Getting Done' });
    expect(gettingDone).toBeInTheDocument();
  });

  it('renders the home rating section', () => {
    render(<Home />);
    const homeRating = screen.getByRole('complementary', { name: 'Home Rating' });
    expect(homeRating).toBeInTheDocument();
  });
});
