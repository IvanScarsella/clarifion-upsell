import Image from 'next/image';
import lock from '../../../public/lock_white.png';

export default function Footer() {
  return (
    <div className='flex flex-col min-[640px]:flex-row min-[640px]:justify-between min-[640px]:px-[344px] gap-4 bg-[#252F3D] items-center p-4 h-[102px] min-[640px]:h-[88px]'>
      <div className='flex flex-row gap-3  text-white min-[640px]:text-16 text-12 mt-3'>
        <p>Copyright (C) 2023</p>
        <div className='bg-white h-6 w-[1px]' />
        <p>clarifionsupport@clarifion.com</p>
      </div>
      <div className='flex flex-row items-center h-8 gap-2'>
        <div className='h-3 w-3 min-[640px]:h-4  min-[640px]:w-4 text-white'>
          <Image
            src={lock}
            className='container'
            width={12}
            height={12}
          />
        </div>
        <p className='min-[640px]:text-16 text-12 text-white'>
          Secure 256-Bit SSL Encryption.
        </p>
      </div>
    </div>
  );
}
