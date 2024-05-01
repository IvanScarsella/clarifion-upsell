import Image from 'next/image';
import Navbar from './components/Navbar';
import check from '../../public/check.png';
import three from '../../public/3.png';
import four from '../../public/4.png';
import check_2 from '../../public/check_2.png';
import three_2 from '../../public/3_2.png';
import four_2 from '../../public/4_2.png';
import Promo from './components/Promo';
import Footer from './components/Footer';

export default function Home() {
  const steps = [
    {
      src: check,
      text: 'Cart Review',
    },
    {
      src: check,
      text: 'Checkout',
    },
    {
      src: three,
      text: 'Special Offer',
    },
    {
      src: four,
      text: 'Confirmation',
    },
  ];
  const steps2 = [
    {
      src: check_2,
      text: 'Cart Review',
    },
    {
      src: check_2,
      text: 'Checkout',
    },
    {
      src: three_2,
      text: 'Special Offer',
    },
    {
      src: four_2,
      text: 'Confirmation',
    },
  ];
  return (
    <div className='flex flex-col gap-6 bg-white text-black'>
      <Navbar />
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-6 w-80 min-[640px]:w-[1500px] mx-auto mb-8 text-center h-[104px] min-[640px]:gap-0 min-[640px]:-mt-12'>
          <h1 className='text-32 min-[640px]:text-48'>
            Wait ! Your Order In Progress.
          </h1>
          <h2 className='text-16 min-[640px]:text-24 text-[#4D5254] capitalize'>
            Lorem ipsum dolor sit amet, consectetur
          </h2>
        </div>

        <div className='h-[37px] w-80 self-center flex flex-row justify-around min-[640px]:hidden'>
          {steps2.map((item) => (
            <div className='flex flex-col items-center gap-1 '>
              <div className='h-5 w-5'>
                <Image
                  src={item.src}
                  width={20}
                  height={20}
                  className='container'
                />
              </div>
              <p
                className={`${
                  item.text === 'Special Offer' ? 'font-bold' : ''
                } text-12`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className='h-[37px] w-[1215px] self-center flex flex-row justify-between max-sm:hidden'>
          {steps.map((item, index) => (
            <div className='flex flex-row items-center gap-5 max-w-[261px]'>
              <div className='h-10 w-10'>
                <Image
                  src={item.src}
                  width={40}
                  height={40}
                  className='container'
                />
              </div>
              <p
                className={`${
                  item.text === 'Special Offer' ? 'font-bold' : ''
                } text-20`}>
                Step {index + 1}: {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Promo />
      <Footer />
    </div>
  );
}
