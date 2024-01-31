import Image from 'next/image';

function Gallery() {
  return (
    <div className="min-h-[240px] min-w-80 flex-1 gap-7 mx-auto  md:pl-16 flex ">
        <div className='space-y-4'>
        <Image
        src={"/images/mini-about-3.jpg"}
        height={'220'}
        width={'200'}
        alt='image-airtask'
        className='object-contain mx-auto'
        style={{borderRadius: "100px 0px 0px 0px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
        <Image
        src={"/images/mini-about-2.jpg"}
        height={'114'}
        width={'114'}
        alt='image-airtask1'
        className='object-contain ml-auto'
        style={{borderRadius: "0px 0px 0px 50px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
        <Image
        src={"/images/mini-about-2.webp"}
        height={'142'}
        width={'142'}
        alt='image-airtask2'
        className='object-contain mr-auto'
        style={{borderRadius: "0px 0px 0px 90px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
        </div>
       <div className='gap-3'>
       <Image
        src={"/images/mini-about-1.webp"}
        height={'76'}
        width={'76'}
        alt='image-airtask4'
        className='object-contain  rounded-3xl'
        />
         <Image
        src={"/images/mini-about-1.jpeg"}
        height={'182'}
        width={'182'}
        alt='about-notify'
        className='object-contain mx-auto my-7'
        style={{borderRadius: "0px 100px 0px 0px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
         <Image
        src={"/images/mini-about-4.jpg"}
        height={'130'}
        width={'130'}
        alt='image-airtask6'
        className='object-contain mx-auto'
        style={{borderRadius: " 0px 0px 60px 0px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
       </div>
      </div>
  )
}

export default Gallery