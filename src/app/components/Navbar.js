import Image from 'next/image';
import image1 from '../../../public/Vector.png';
import image2 from '../../../public/Vector2.png';
import image3 from '../../../public/Vector3.png';
import image4 from '../../../public/clarifion_logo.png';
import image5 from '../../../public/McAfee_logo.png';
import image6 from '../../../public/Norton_logo.png';
import truck from '../../../public/truck.png';
import heart from '../../../public/heart.png';
import nav1 from '../../../public/nav1.png';
import nav2 from '../../../public/nav2.png';
import nav3 from '../../../public/nav3.png';
import nav4 from '../../../public/nav4.png';
import guarantee from '../../../public/guarantee.png';

export default function Navbar() {
  return (
    <div className=''>
      <div className='bg-[#252F3D]'>
        <div className='min-sm:w-[348px] min-[640px]:px-[76px] min-[640px]:w-full px-5 flex py-[10px] justify-between min-[640px]:justify-around mx-auto h-[42px] min-[640px]:h-[50px] items-center'>
          <div className='min-[640px]:hidden'>
            <Image
              alt=''
              src={image1}
              width={7.5}
              height={12.5}
              className='container'
            />
          </div>
          <div className='flex flex-row justify-around w-[228px] items-center gap-3'>
            <div className='h-[22px] w-[22px]'>
              <Image
                alt=''
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
                alt=''
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
                alt=''
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
                alt=''
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
              alt=''
              src={image2}
              width={7.5}
              height={12.5}
              className='container'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between max-sm:w-80 min-[640px]:w-full min-[640px]:px-[116px] h-[60px] min-[640px]:h-[90px] mx-auto items-center bg-white'>
        {/* <div className='min-[640px]:scale-150 max-w-[192px] h-5 w-[107px] min-[640px]:ml-8 max-sm:-ml-1'>
          <Image
            alt=''
            src={image4}
            width={106.67}
            height={20}
            className='container'
          />
        </div>
        <div className='flex flex-row justify-between max-sm:gap-0  min-[640px]:gap-8 max-w-[202px]'>
          <div className='h-14 max-sm:scale-50 max-sm:ml-10 max-sm:mt-4 mt-10 min-[640px]:scale-100'>
            <Image
              alt=''
              src={image5}
              width={96}
              height={40}
              className='container'
            />
          </div>
          <div className='h-14 max-sm:scale-50  max-sm:mt-4 mt-10 min-[640px]:scale-100'>
            <Image
              alt=''
              src={image6}
              width={82}
              height={32}
              className='container'
            />
          </div>
        </div> */}
        <div className='w-80 min-[640px]:hidden'>
          <Image
            alt=''
            src={nav1}
            className='container'
          />
        </div>
        <div className='flex flex-row justify-between items-center w-[1400px] mt-2 h-24 max-sm:hidden'>
          <div className='h-9 w-48'>
            <Image
              alt=''
              src={nav3}
              width={1400}
              height={96}
              className='container'
            />
          </div>
          <div className='h-8 w-[202px]'>
            <Image
              alt=''
              src={nav4}
              width={1400}
              height={96}
              className='container'
            />
          </div>
        </div>
        {/* <div className='max-w-[1400px] mt-2 h-24 max-sm:hidden'>
          <Image
            alt=''
            src={nav2}
            width={1400}
            height={96}
            className='container'
          />
        </div> */}
      </div>
    </div>
  );
}
