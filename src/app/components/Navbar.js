import Image from 'next/image';
import image1 from '../../../public/Vector.png';
import image2 from '../../../public/Vector2.png';
import image3 from '../../../public/Vector3.png';
import image4 from '../../../public/clarifion_logo.png';
import image5 from '../../../public/McAfee_logo.png';
import image6 from '../../../public/Norton_logo.png';
import truck from '../../../public/truck.png';
import heart from '../../../public/heart.png';
import guarantee from '../../../public/guarantee.png';

export default function Navbar() {
  return (
    <div className=''>
      <div className='bg-[#252F3D]'>
        <div className='min-sm:w-[348px] px-5 flex py-[10px] justify-between min-[640px]:justify-around mx-auto h-[42px] min-[640px]:h-[50px] items-center'>
          <div className='min-[640px]:hidden'>
            <Image
              src={image1}
              width={7.5}
              height={12.5}
              className='container'
            />
          </div>
          <div className='flex flex-row justify-around w-[228px] items-center gap-3'>
            <div className='h-[22px] w-[22px]'>
              <Image
                src={image3}
                width={18.2}
                height={18.2}
                className='container'
              />
            </div>
            <p className='text-12 text-white'>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className='flex flex-row justify-around w-[257px] items-center gap-3 max-sm:hidden'>
            <div className=''>
              <Image
                src={truck}
                width={18.2}
                height={18.2}
                className='container'
              />
            </div>
            <p className='text-12 text-white'>
              FREE DELIVERY ON ORDERS OVER $40.00
            </p>
          </div>
          <div className='flex flex-row justify-around w-[194px] items-center gap-3 max-sm:hidden'>
            <div className=''>
              <Image
                src={heart}
                width={18.2}
                height={18.2}
                className='container'
              />
            </div>
            <p className='text-12 text-white'>50.000+ HAPPY CUSTOMERS</p>
          </div>
          <div className='flex flex-row justify-around w-[210px] items-center gap-3 max-sm:hidden'>
            <div className=''>
              <Image
                src={guarantee}
                width={18.2}
                height={18.2}
                className='container'
              />
            </div>
            <p className='text-12 text-white'>100% MONEY BACK GUARANTEE</p>
          </div>
          <div className='min-[640px]:hidden'>
            <Image
              src={image2}
              width={7.5}
              height={12.5}
              className='container'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between max-sm:w-80 min-[640px]:w-[1500px] min-[640px]:px-28 h-[60px] min-[640px]:h-[90px] mx-auto items-center bg-white'>
        <div className='min-[640px]:scale-150'>
          <Image
            src={image4}
            width={106.67}
            height={20}
            className='container'
          />
        </div>
        <div className='flex flex-row justify-between gap-4 min-[640px]:gap-12'>
          <div className='min-[640px]:scale-150'>
            <Image
              src={image5}
              width={44}
              height={16}
              className='container'
            />
          </div>
          <div className='min-[640px]:scale-150'>
            <Image
              src={image6}
              width={41}
              height={16}
              className='container'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
