import { render, screen } from '@testing-library/react';
import About from '@/app/(company)/(routes)/aboutUs/components/AboutFaq';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText("FAQ")).toBeInTheDocument()
  });
})
 