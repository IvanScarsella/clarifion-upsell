import Image from 'next/image';
import promoImage from '../../../public/promo_image.png';
import promoImage2 from '../../../public/promo_image2.png';
import star from '../../../public/star.png';
import star_2 from '../../../public/star_2.png';
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
import customer_photo from '../../../public/customer_photo.png';
import green_tick from '../../../public/green_tick.png';

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
    <>
      <div className='w-80 mx-auto flex flex-col gap-4 mb-4 min-[768px]:hidden'>
        <h1 className='text-24 capitalize text-center'>
          <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price
          for 6 extra Clarifion for only{' '}
          <span className='text-[#2C7EF8]'>$14 each </span>($84.00 total!)
        </h1>

        <div>
          <Image
            alt=''
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
                alt=''
                src={promoImage2}
                className='container'
              />
            </div>
            <div className='w-56 flex flex-col gap-2.5'>
              <div className='flex flex-row justify-between'>
                <p className='text-14 font-bold'>Clarifion Air Ionizer</p>
                <div className='flex flex-row gap-2 items-center'>
                  <p className='text-10 text-[#969696]'>$180</p>
                  <p className='text-14 text-[#2C7EF8]'>$84</p>
                </div>
              </div>
              <div className='flex flex-row gap-1'>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
                    src={star}
                    className='container'
                  />
                </div>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
                    src={star}
                    className='container'
                  />
                </div>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
                    src={star}
                    className='container'
                  />
                </div>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
                    src={star}
                    className='container'
                  />
                </div>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
                    src={star}
                    className='container'
                  />
                </div>
              </div>
              <div className='flex flex-row gap-4 items-center'>
                <div className='rounded-full w-3 h-3 p-[3px] bg-[#E3EEFF]'>
                  <div className='rounded-full w-1.5 h-1.5 bg-[#2C7EF8]' />{' '}
                </div>
                <p className='text-12 text-[#37465A]'>12 left in Stock</p>
              </div>
            </div>
          </div>
          <p className='text-[#4D5254] align-top text-11 font-light tracking-normal text-center w-[326px]'>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-3 text-[#4D5254]'>
            <div className='h-4 w-4'>
              <Image
                alt=''
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
                alt=''
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
                alt=''
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

        <div className='flex flex-row gap-4 items-center bg-[#EDF3FD] rounded-xl justify-start p-2 px-4'>
          <div className='h-8 w-8 mt-2'>
            <Image
              alt=''
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
            <h2 className='h-[51px] w-[209px] py-4 font-bold text-14 text-white text-center tracking-widest'>
              YES - CLAIM MY DISCOUNT
            </h2>
            <div className='h-3 w-3'>
              <Image
                alt=''
                src={arrow}
                width={12}
                height={12}
                className='container'
              />
            </div>
          </div>
          <div className='border border-[#CFCFCF] flex flex-col gap-3  items-center'>
            <div className='flex flex-row items-center gap-3 justify-around -mb-3'>
              <p className='text-12 text-[#4D5254] text-center'>
                Free shipping
              </p>
              <div className='bg-[#CFCFCF] h-3.5 w-[1px]' />
              <div className='flex flex-row items-center h-8 gap-2'>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
                    src={lock}
                    className='container'
                    width={12}
                    height={12}
                  />
                </div>
                <p className='text-12 text-[#4D5254]'>
                  Secure 256-Bit SSL Encryption
                </p>
              </div>
            </div>
            <div className='bg-[#CFCFCF] w-[289px] h-[1px]' />
            <div className='flex flex-row gap-2'>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className='h-6 w-6'>
                  <Image
                    alt=''
                    src={card.src}
                    className='container'
                    width={24}
                    height={14}
                  />
                </div>
              ))}
            </div>
          </div>
          <h2 className='uppercase text-[#F82C2C] text-14 font-bold underline decoration-[#F82C2C]/30 self-center underline-offset-1'>
            No thanks, I don’t want this.
          </h2>
        </div>

        <div className=' flex flex-row gap-4 h-[77px] items-center'>
          <div className='min-h-12 min-w-12'>
            <Image
              alt=''
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

      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}
      {/* FULL SCREEN */}

      <div className='w-[1245px] p-12 max-lg:p-4 mx-auto flex flex-row gap-10 mb-4 max-md:hidden max-w-full items-center max-lg:gap-0'>
        <div className='max-lg:w-2/5  flex flex-col gap-3 max-lg:scale-[0.8] max-md:scale-[0.5] max-w-[1/2]'>
          <div>
            <Image
              alt=''
              src={promoImage}
              //  height={328}
              //  width={320}
              className='container'
            />
          </div>
          <div className='flex flex-col gap-4 p-4 mt-12'>
            <div className='flex flex-row gap-3 items-center'>
              <div className='h-12 w-12'>
                <Image
                  alt=''
                  src={customer_photo}
                  className='container'
                />
              </div>
              <div className='flex flex-col justify-around gap-1'>
                <div className='flex flex-row gap-2'>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star_2}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star_2}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star_2}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star_2}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star_2}
                      className='container'
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center gap-3'>
                  <p className='text-14 font-bold'>Ken T.</p>
                  <div>
                    <Image
                      alt=''
                      src={green_tick}
                      className='container'
                    />
                  </div>
                  <p className='text-[#5BB59A] text-12'>Verified Customer </p>
                </div>
              </div>
            </div>
            <p className='text-16 text-[#4D5254] text-justify'>
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </div>
        </div>

        {/*  */}

        <div className='max-lg:w-2/5 flex flex-col gap-4 max-lg:scale-[0.7] max-md:scale-[0.5] max-w-[1/2] max-lg:-ml-2'>
          <h1 className='text-32 capitalize w-[550px] leading-[40px]'>
            <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price
            for 6 extra Clarifion for only{' '}
            <span className='text-[#2C7EF8]'>$14 each </span>($84.00 total!)
          </h1>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-6'>
              <div className='w-[134px] h-[134px] bg-[#2C7EF8] rounded-xl'>
                <div className='h-[134px] w-[134px]'>
                  <Image
                    alt=''
                    src={promoImage2}
                    className='container'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <div className='flex flex-row gap-40'>
                  <p className='text-20 font-bold'>Clarifion Air Ionizer</p>
                  <div className='flex flex-row items-center gap-4'>
                    <p className='text-16 text-[#969696]'>$180</p>
                    <p className='text-22 text-[#2C7EF8]'>$84</p>
                  </div>
                </div>
                <div className='flex flex-row gap-2 -mt-2'>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star}
                      className='container'
                    />
                  </div>
                  <div className='h-3 w-3'>
                    <Image
                      alt=''
                      src={star}
                      className='container'
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                  <div className='rounded-full w-4 h-4 p-1 bg-[#E3EEFF]'>
                    <div className='rounded-full w-2 h-2 bg-[#2C7EF8]' />{' '}
                  </div>
                  <p className='text-16 text-[#37465A]'>12 left in Stock</p>
                </div>
                <p className='align-top text-16 font-light tracking-wide w-[430px] text-[#4D5254]'>
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-3 text-[#4D5254]'>
              <div className='h-4 w-4'>
                <Image
                  alt=''
                  src={tick}
                  className='container'
                />
              </div>
              <p className='text-16'>
                Negative Ion Technology may{' '}
                <span className='font-bold'>help with allergens</span>
              </p>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='h-4 w-4'>
                <Image
                  alt=''
                  src={tick}
                  className='container'
                />
              </div>
              <p className='text-16'>
                Designed for <span className='font-bold'>air rejuvenation</span>
              </p>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='h-4 w-4'>
                <Image
                  alt=''
                  src={tick}
                  className='container'
                />
              </div>
              <p className='text-16'>
                <span className='font-bold'>Perfect for every room</span> in all
                types of places.
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-4 h-14 w-[550px] -ml-2 mx-4 items-center bg-[#EDF3FD] rounded-xl justify-start p-4'>
            <div className='h-10 w-8 mt-2'>
              <Image
                alt=''
                src={percent}
                width={24}
                height={24}
                className='container'
              />
            </div>
            <p className='text-16 h-6'>
              Save <span className='text-[#2C7EF8]'>53%</span> and get{' '}
              <span className='text-[#2C7EF8]'>6 extra Clarifision</span> for
              only <span className='text-[#2C7EF8]'>$14 Each.</span>
            </p>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-4 w-[542px] h-[59px] -ml-2 bg-[#59AE43] rounded-full items-center justify-center mx-auto'>
              <h2 className='py-4 font-bold text-20 text-white text-center tracking-widest'>
                YES - CLAIM MY DISCOUNT
              </h2>
              <div className='h-4 w-4'>
                <Image
                  alt=''
                  src={arrow}
                  width={16}
                  height={16}
                  className='container'
                />
              </div>
            </div>
            <div className='border border-[#CFCFCF] -ml-2 flex flex-row justify-around items-center'>
              <p className='text-12 text-[#4D5254] text-center'>
                Free shipping
              </p>
              <div className='bg-[#CFCFCF] h-4 w-[1px]' />
              <div className='flex flex-row items-center h-8 gap-2'>
                <div className='h-3 w-3'>
                  <Image
                    alt=''
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
              <div className='bg-[#CFCFCF] h-4 w-[1px]' />
              <div className='flex flex-row items-center gap-1'>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className='h-3.5 w-6'>
                    <Image
                      alt=''
                      src={card.src}
                      className='container'
                      width={24}
                      height={14}
                    />
                  </div>
                ))}
              </div>
            </div>
            <h2 className=' mt-4 uppercase text-[#F82C2C] text-18 font-bold underline decoration-[#F82C2C]/30 self-center underline-offset-1'>
              No thanks, I don’t want this.
            </h2>
          </div>

          <div className='mt-8 -ml-2 flex flex-row gap-4 h-[77px] items-center w-[550px]'>
            <div className='min-h-[88px] min-w-[88px]'>
              <Image
                alt=''
                src={satisfaction}
                width={88}
                height={88}
                className='container'
              />
            </div>
            <p className='text-16'>
              If you are not completely thrilled with your Clarifion - We have a{' '}
              <span className='font-bold'>30 day satisfaction guarantee</span>.
              Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
