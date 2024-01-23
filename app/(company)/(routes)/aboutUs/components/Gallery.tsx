import Image from 'next/image';

function Gallery() {
  return (
    <div className="min-h-[240px] min-w-80 flex-1 gap-7 mx-auto  md:pl-16 flex ">
        <div className='space-y-4'>
        <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={'220'}
        width={'200'}
        alt='image-airtask1'
        className='object-contain mx-auto'
        style={{borderRadius: "100px 0px 0px 0px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
        <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={'114'}
        width={'114'}
        alt='image-airtask1'
        className='object-contain ml-auto'
        style={{borderRadius: "0px 0px 0px 50px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
        <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={'142'}
        width={'142'}
        alt='image-airtask1'
        className='object-contain mr-auto'
        style={{borderRadius: "0px 0px 0px 90px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
        </div>
       <div className='gap-3'>
       <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={'76'}
        width={'76'}
        alt='image-airtask'
        className='object-contain  rounded-3xl'
        />
         <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={'182'}
        width={'182'}
        alt='image-airtask1'
        className='object-contain mx-auto my-7'
        style={{borderRadius: "0px 100px 0px 0px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
         <Image
        src={"https://images.airtasker.com/v7/www.airtasker.com/static/assets/e67aa6fa0989cb7f.jpg?w=1104&func=bound&org_if_sml=1&q=80"}
        height={'130'}
        width={'130'}
        alt='image-airtask1'
        className='object-contain mx-auto'
        style={{borderRadius: " 0px 0px 60px 0px", boxShadow: "0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)"}}
        />
       </div>
        {/* <YourComponent/> */}
      </div>
  )
}

export default Gallery