import Banner from "@components/Home/Banner"
// import { Metadata } from 'next'; 
 
// export const metadata: Metadata = {
//   openGraph: {
//     title: 'Next.js',
//     description: 'The React Framework for the Web',
//     url: 'https://nextjs.org',
//     siteName: 'Next.js',
//     images: [
//       {
//         url: 'https://nextjs.org/og.png',
//         width: 800,
//         height: 600,
//       },
//       {
//         url: 'https://nextjs.org/og-alt.png',
//         width: 1800,
//         height: 1600,
//         alt: 'My custom alt',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// };
export default function Home() {
  return (
    <main className="">
      <Banner/>
      {/* <div className="curve"/> */}
    </main>
  )
}
