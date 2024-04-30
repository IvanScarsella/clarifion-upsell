import Image from 'next/image';
import promoImage from '../../../public/promo_image.png';
import promoImage2 from '../../../public/promo_image2.png';
import star from '../../../public/star.png';
import tick from '../../../public/tick.png';
import percent from '../../../public/percent.png';
import arrow from '../../../public/arrow.png';
import lock from '../../../public/lock.png';
import card1 from '../../../public/card1.png';
import card2 from '../../../public/card2.png';
import card3 from '../../../public/card3.png';
import card4 from '../../../public/card4.png';
import card5 from '../../../public/card5.png';
import card6 from '../../../public/card6.png';
import card7 from '../../../public/card7.png';
import satisfaction from '../../../public/satisfaction.png';

export default function Promo() {
  const cards = [
    { src: card1 },
    { src: card2 },
    { src: card3 },
    { src: card4 },
    { src: card5 },
    { src: card6 },
    { src: card7 },
  ];

  return (
    <div className='w-80 mx-auto flex flex-col gap-6 mb-8'>
      <h1 className='text-2xl capitalize text-center'>
        <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price for
        6 extra Clarifion for only{' '}
        <span className='text-[#2C7EF8]'>$14 each </span>($84.00 total!)
      </h1>

      <div>
        <Image
          src={promoImage}
          //  height={328}
          //  width={320}
          className='container'
        />
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-4'>
          <div className='w-1/4 h-20 bg-[#2C7EF8] rounded-xl'>
            <Image
              src={promoImage2}
              className='container'
            />
          </div>
          <div className='w-56 flex flex-col gap-2.5'>
            <div className='flex flex-row justify-between'>
              <p>Clarifion Air Ionizer</p>
              <div className='flex flex-row gap-2'>
                <p className='text-10 text-[#969696]'>$180</p>
                <p className='text-14 text-[#2C7EF8]'>$84</p>
              </div>
            </div>
            <div className='flex flex-row gap-1'>
              <div className='h-3 w-3'>
                <Image
                  src={star}
                  className='container'
                />
              </div>
              <div className='h-3 w-3'>
                <Image
                  src={star}
                  className='container'
                />
              </div>
              <div className='h-3 w-3'>
                <Image
                  src={star}
                  className='container'
                />
              </div>
              <div className='h-3 w-3'>
                <Image
                  src={star}
                  className='container'
                />
              </div>
              <div className='h-3 w-3'>
                <Image
                  src={star}
                  className='container'
                />
              </div>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <div className='rounded-full w-2 h-2 bg-[#2C7EF8]' />
              <p className='text-12 text-[#37465A]'>12 left in Stock</p>
            </div>
          </div>
        </div>
        <p className='align-top text-11 font-light tracking-normal text-center w-[326px]'>
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-3'>
          <div className='h-4 w-4'>
            <Image
              src={tick}
              className='container'
            />
          </div>
          <p className='text-11'>
            Negative Ion Technology may{' '}
            <span className='font-bold'>help with allergens</span>
          </p>
        </div>
        <div className='flex flex-row gap-3'>
          <div className='h-4 w-4'>
            <Image
              src={tick}
              className='container'
            />
          </div>
          <p className='text-11'>
            Designed for <span className='font-bold'>air rejuvenation</span>
          </p>
        </div>
        <div className='flex flex-row gap-3'>
          <div className='h-4 w-4'>
            <Image
              src={tick}
              className='container'
            />
          </div>
          <p className='text-11'>
            <span className='font-bold'>Perfect for every room</span> in all
            types of places.
          </p>
        </div>
      </div>

      <div className='flex flex-row gap-4 items-center bg-[#EDF3FD] rounded-xl justify-start p-4'>
        <div className='h-10 w-10 mt-2'>
          <Image
            src={percent}
            width={24}
            height={24}
            className='container'
          />
        </div>
        <p className='text-14'>
          Save <span className='text-[#2C7EF8]'>53%</span> and get{' '}
          <span className='text-[#2C7EF8]'>6 extra Clarifision</span> for only{' '}
          <span className='text-[#2C7EF8]'>$14 Each.</span>
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-row w-80 bg-[#59AE43] rounded-full items-center justify-center mx-auto'>
          <h2 className='h-[51px] w-[179px] py-4 font-bold text-14 text-white text-center'>
            YES - CLAIM MY DISCOUNT
          </h2>
          <div>
            <Image
              src={arrow}
              width={12}
              height={12}
              className='container'
            />
          </div>
        </div>
        <div className='border border-[#CFCFCF] flex flex-col gap-3  items-center'>
          <div className='flex flex-row items-center gap-3 justify-around -mb-3'>
            <p className='text-12 text-[#4D5254] text-center'>Free shipping</p>
            <div className='bg-[#CFCFCF] h-3.5 w-[1px]' />
            <div className='flex flex-row items-center h-8 gap-2'>
              <div className='h-3 w-3'>
                <Image
                  src={lock}
                  className='container'
                  width={12}
                  height={12}
                />
              </div>
              <p className='text-12 text-[#4D5254]'>
                Secure 256-bit SSL encryption
              </p>
            </div>
          </div>
          <div className='bg-[#CFCFCF] w-[289px] h-[1px]' />
          <div className='flex flex-row gap-2'>
            {cards.map((card) => (
              <div className='h-6 w-6'>
                <Image
                  src={card.src}
                  className='container'
                  width={24}
                  height={14}
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className='uppercase text-[#F82C2C] text-14 underline self-center underline-offset-2'>
          No thanks, I don’t want this.
        </h2>
      </div>

      <div className=' flex flex-row gap-4 h-[77px] items-center'>
        <div className='min-h-12 min-w-12'>
          <Image
            src={satisfaction}
            width={48}
            height={48}
            className='container'
          />
        </div>
        <p className='text-12'>
          If you are not completely thrilled with your Clarifion - We have a{' '}
          <span className='font-bold'>30 day satisfaction guarantee</span>.
          Please refer to our return policy at the bottom of the page for more
          details. Happy Shopping!
        </p>
      </div>
    </div>
  );
}
