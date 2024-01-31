import { render, screen } from '@testing-library/react';
import AboutFaq from '@/app/(company)/(routes)/aboutUs/components/AboutFaq';
import About from '@/app/(company)/(routes)/aboutUs/page';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<AboutFaq />);
    expect(screen.getByText("FAQ")).toBeInTheDocument()
  });
  it("alt image", ()=>{
    render(<About />);
    const imageAlt = screen.getByAltText("image-git");
    expect(imageAlt).toBeInTheDocument()
  });
  it("image name", ()=>{
    render(<About />);
    const image = screen.getAllByRole("img")
    expect(image).toHaveLength(6)
  });
  // it("alt image", ()=>{
  //   render(<About />);
  //   const imageAlt = screen.getAllByAltText("image-airtask1");
  //   expect(imageAlt).toHaveLength(4)
  // })
})
 