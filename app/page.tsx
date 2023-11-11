import Banner from "@components/Home/Banner"
import { Metadata } from 'next'; 
 
export const metadata: Metadata = {
  openGraph: {
    title: 'JBProMend',
    description: 'Get your local work done here',
    url: 'https://jb-task-searvice.vercel.app/',
    siteName: 'JBProMend',
    images: [
      {
        url: 'https://jb-task-searvice.vercel.app/opengraph-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default function Home() {
  return (
    <main className="">
      <Banner/>
      <div className="urve"/>
    </main>
  )
}
