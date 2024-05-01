import Image from 'next/image';
import image1 from '../../../public/Vector.png';
import image2 from '../../../public/Vector2.png';
import image3 from '../../../public/Vector3.png';
import image4 from '../../../public/clarifion_logo.png';
import image5 from '../../../public/McAfee_logo.png';
import image6 from '../../../public/Norton_logo.png';

export default function Navbar() {
  return (
    <div className=''>
      <div className='bg-[#252F3D]'>
        <div className='w-[348px] px-5 flex py-[10px] justify-between mx-auto h-[42px] items-center'>
          <div className=''>
            <Image
              src={image1}
              width={7.5}
              height={12.5}
              className='container'
            />
          </div>
          <div className='flex flex-row justify-around w-[227px] items-center gap-3'>
            <div className=''>
              <Image
                src={image3}
                width={18.2}
                height={18.2}
                className='container'
              />
            </div>
            <p className='text-12 text-white'>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className=''>
            <Image
              src={image2}
              width={7.5}
              height={12.5}
              className='container'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between w-80 h-[60px] mx-auto items-center bg-white'>
        <div>
          <Image
            src={image4}
            width={106.67}
            height={20}
            className='container'
          />
        </div>
        <div className='flex flex-row justify-between gap-4'>
          <div>
            <Image
              src={image5}
              width={44}
              height={16}
              className='container'
            />
          </div>
          <div>
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
