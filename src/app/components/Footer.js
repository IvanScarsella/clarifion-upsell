import Image from 'next/image';
import lock from '../../../public/lock_white.png';

export default function Footer() {
  return (
    <div className='flex flex-col gap-4 bg-[#252F3D] items-center p-8'>
      <div className='flex flex-row gap-3  text-white text-12'>
        <p>Copyright (c) 2023</p>
        <div className='bg-white h-3.5 w-[1px]' />
        <p>Clarifionsupport@clarifion.com</p>
      </div>
      <div className='flex flex-row items-center h-8 gap-2'>
        <div className='h-3 w-3 text-white'>
          <Image
            src={lock}
            className='container'
            width={12}
            height={12}
          />
        </div>
        <p className='text-12 text-white'>Secure 256-bit SSL encryption</p>
      </div>
    </div>
  );
}
