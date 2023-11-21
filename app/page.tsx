import { Metadata } from 'next'; 
import Banner from "@components/Home/Banner";
import ProductCard from "@components/product-card/Card"
 
// export const metadata: Metadata = {
//   openGraph: {
//     title: 'JBProMend',
//     description: 'Get your local work done here',
//     url: 'https://jb-task-searvice.vercel.app/',
//     siteName: 'JBProMend',
//     images: [
//       {
//         url: 'https://jb-task-searvice.vercel.app/opengraph-image.png',
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// };
export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-10">
      <Banner/>
      <h2 className="text-2xl font-bold mt-5 mb-3 mr-4">Popular Projects</h2>
      <div className="grid max-sm:space-y-8 max-lg:p-4 gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      <div className="rad">hello</div>
      {/* //create another folder and file calle help eith then add animation by the side and texte by the right */}
      <div className="curve"/>
    </main>
  )
}
