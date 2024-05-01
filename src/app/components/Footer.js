import Image from 'next/image';
import lock from '../../../public/lock_white.png';

export default function Footer() {
  return (
    <div className='flex flex-col min-[640px]:flex-row min-[640px]:justify-between min-[640px]:px-[370px] gap-4 bg-[#252F3D] items-center p-4 h-[102px] min-[640px]:h-[88px]'>
      <div className='flex flex-row gap-3  text-white text-16 mt-3'>
        <p>Copyright (c) 2023</p>
        <div className='bg-white h-6 w-[1px]' />
        <p>clarifionsupport@clarifion.com</p>
      </div>
      <div className='flex flex-row items-center h-8 gap-2'>
        <div className='h-4 w-4 text-white'>
          <Image
            src={lock}
            className='container'
            width={12}
            height={12}
          />
        </div>
        <p className='text-16 text-white'>Secure 256-bit SSL encryption</p>
      </div>
    </div>
  );
}
