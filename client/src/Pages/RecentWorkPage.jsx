import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaBlenderPhone } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoDiamondOutline } from 'react-icons/io5';
// icons
import { TiTick } from 'react-icons/ti';
import { GrCertificate } from 'react-icons/gr';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoCarSportOutline } from 'react-icons/io5';
function RecentWork() {
 

  return (
    <div className='relative'>
      <Navbar />
      <main>
        <article>
          {/* <HeroSection /> */}

          <section className='section' id='hero-banner'>
            <div className='relative md:h-96'>
              <div className='h-full grid grid-cols-1 md:grid-cols-2 '>
                {/* Overlay div */}
                <div className='absolute h-full w-full bg-black opacity-50 -z-10'></div>
                <div className='absolute -z-20 h-full w-full'>
                  <img
                    className='h-full w-full object-cover object-left'
                    src='https://www.motoroids.com/wp-content/uploads/2020/09/auto-terrence-web-banner-home.jpg'
                    alt=''
                  />
                </div>
                {/* left container  */}
                <div className='hidden md:flex items-center justify-center mx-auto px-16'>
                  <div className=''>
                    <h1 className='text-white text-6xl font-bold text-nowrap'>
                      Why Choose Urban Garage?
                    </h1>
                    <h4 className='text-white text-3xl font-bold'>
                      Serving Our Community Since 2014
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hero Banner section Start  */}

          <section className='section' id='hero-banner'>
            <div className='relative md:h-96'>
              <div className='h-full grid grid-cols-1 md:grid-cols-2 px-16'>
                {/* left container  */}
                <div className='hidden md:flex items-center justify-center'>
                  <div className='p-5'>
                    <h1 className='text-5xl mb-6  font-bold'>
                      The Dealer You Can
                      <br /> Count On
                    </h1>
                    <p className='text-lg '>
                      Every Easterns vehicle has passed a rigorous multi-point
                      certification check so you can buy with confidence. Search
                      our vast inventory of over 1000 cars where your experience
                      is completely customizable. 100 % Online, in-person or a
                      mix of both. Our friendly customer care staff handles any
                      pre or post-sale questions you may have, and that is why
                      Easterns has over a 97% customer approval rating. We
                      invite you to come into an Easterns store, call, or chat
                      online today and experience firsthand what we mean by the
                      Easterns difference!
                    </p>
                  </div>
                </div>
                {/* right container  */}
                <div className='bg-white p-5 '>
                  <iframe
                    width='516'
                    height='380'
                    src='https://www.youtube.com/embed/tgbNymZ7vqY'
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className='section' id='hero-banner'>
            <div className='relative mx-auto flex gap-20 flex-col items-center justify-center'>
              <div className='h-full px-16'>
                <h1 className='relative inline-block text-black text-center text-5xl'>
                  Shop With Confidence
                  <span className='absolute bottom-[-12] left-1/2 transform -translate-x-1/2'>
                    <span className='block h-0.5 w-56 bg-black'></span>
                  </span>
                </h1>
              </div>
              <div className='flex gap-12 px-16'>
                <div className='flex flex-col items-center justify-center '>
                  <div className='flex justify-center'>
                    <p className='inline-flex items-center gap-2 font-semibold text-2xl'>
                      <IoDiamondOutline className='text-3xl' />
                      Quality
                    </p>
                  </div>
                  <p className='text-base'>Multi Point Quality Certification</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                  <div className='flex justify-center'>
                    <p className='inline-flex items-center gap-2 font-semibold text-2xl'>
                      <GrCertificate className='text-3xl' />
                      Service
                    </p>
                  </div>
                  <p className='text-base'>7 Days Return Policy.</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                  <div className='flex justify-center'>
                    <p className='inline-flex items-center gap-2 font-semibold text-2xl'>
                      < GiReceiveMoney className='text-3xl' />
                      Experience
                    </p>
                  </div>
                  <p className='text-base'>#1 in Credit Assitance.</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                  <div className='flex justify-center'>
                    <p className='inline-flex items-center gap-2 font-semibold text-2xl'>
                      <IoCarSportOutline className='text-3xl' />
                      Choice
                    </p>
                  </div>
                  <p className='text-base'>Over 1000 Vehicles in Stock</p>
                </div>
              </div>
            </div>
          </section>
          {/* sell banner start */}
          <section className='section get-start'>
            <div className='container'>
              <div className=' h-80 flex flex-col gap-y-2 items-center justify-center rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500'>
                <h1 className='text-4xl font-semibold text-theme-bold tracking-wide text-nowrap'>
                  Sell Your Car At Highest Price In{' '}
                </h1>
                <p className='h1 font-extrabold text-theme-bold'>59 Minutes</p>
                <div className='flex gap-x-5'>
                  <p className='flex items-center gap-3 text-theme-500'>
                    <FaBlenderPhone className='text-lg' />
                    Instant Call Back
                  </p>
                  <p className='flex items-center gap-3 text-theme-500'>
                    <FaCar className='text-lg' />
                    Doorstep Evalution
                  </p>
                  <p className='flex items-center gap-3 text-theme-500'>
                    <FaMoneyCheckAlt className='text-lg' />
                    Instants Payment
                  </p>
                </div>
                <div>
                  <button className='bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg '>
                    Sell Your Car
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* sell banner end  */}

          <section className='section get-start'>
            <div className='container'>
              <div className='mb-5'>
                <h2 className='h2 section-title text-center text-theme-semibold '>
                  Our Experience Centres
                </h2>
                <p className='p max-w-3xl m-auto text-center text-theme-500'>
                  Test drive, learn about services and more at your nearest
                  showroom.
                </p>
              </div>

              <div className='grid md:grid-cols-2 gap-x-5 gap-y-5'>
                {/* card 1 */}

                <div className='h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500'>
                  <h1 className='text-4xl font-semibold text-theme-bold tracking-wide text-nowrap'>
                    CHANDIGARH
                  </h1>
                  <p className='p font-extrabold text-theme-500'>
                    Standing at the heart of the Millennium city, our team of
                    seasoned experts offers an array luxury car services and
                    tailored solutions to cater to your every automotive
                    requirement.
                  </p>

                  <div className='flex gap-x-3'>
                    <button className='outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors'>
                      Book a vist
                    </button>
                    <button className='bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg '>
                      Get a Directions
                    </button>
                  </div>
                </div>

                {/* card 2 */}

                <div className='h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500'>
                  <h1 className='text-4xl font-semibold text-theme-bold tracking-wide text-nowrap'>
                    Karnal
                  </h1>
                  <p className='p font-extrabold text-theme-500'>
                    Witness the grandeur of India's largest pre-owned car
                    experience centre, where our highly skilled team of experts
                    bring you a wide array of comprehensive car-related
                    services.
                  </p>

                  <div className='flex gap-x-3'>
                    <button className='outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors'>
                      Book a visit
                    </button>
                    <button className='bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg '>
                      Get a Direction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section' id='hero-banner'>
            <div className='relative h-screen'>
              <div className='h-full grid grid-cols-1 md:grid-cols-2 '>
                {/* Overlay div */}
                <div className='absolute -z-10 h-full w-full bg-black opacity-60 '></div>
                <div className='absolute -z-20 h-full w-full'>
                  <img
                    className='h-full w-full object-cover object-left'
                    src='https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png'
                    alt=''
                  />
                </div>
                {/* left container  */}

                {/* right container  */}
                <div className=' p-5 opacity-80'>
                  <div className='mb-2'>
                    {/* <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3> */}
                    <h2 className='h1 text-white text-theme-bold font-bold text-2xl'>
                      Our Services
                    </h2>
                  </div>
                  <div className='mb-2'>
                    <p className='text-theme-500 text-white'>
                      We provide complete professional services in our state of
                      the art service centres designed to keep your ride running
                      smoothly and impressively.
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-x-5 mb-10'>
                    <div>
                      <ul className='text-theme-500 flex flex-col gap-y-5'>
                        <li className='flex text-white items-center text-theme-500'>
                          <TiTick className='text-white text-xl' />
                          OEM/OES Parts
                        </li>
                        <li className='flex text-white items-center text-theme-500'>
                          {' '}
                          <TiTick className='text-white text-xl' /> PAN India
                          Delivery
                        </li>
                        <li className='flex text-white  items-center text-theme-500'>
                          {' '}
                          <TiTick className='text-white text-xl' /> In House
                          Service Available
                        </li>
                        <li className='flex text-white  items-center text-theme-500'>
                          {' '}
                          <TiTick className='text-white text-xl' /> 350+ Check
                          Evaluations
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-5 max-w-1xl'>
                    <button className='outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors'>
                      Book Service package
                    </button>
                    <button className='outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors'>
                      Book Service
                    </button>
                    <button className='outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors'>
                      Book Car Care
                    </button>
                    <button className='outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors'>
                      Buy Extended Warranty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section blog' id='blog'>
            <div className='container'>
              <h2 className='h2 section-title text-theme-semibold'>
                Customers Reviews
              </h2>

              <ul className='blog-list has-scrollbar'>
                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-78.png&w=1920&q=75'
                          alt='Abertura de novos escritórios da empresa'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link
                        to='#'
                        className='btn card-badge text-theme-semobold'
                      >
                        Balwindar Singh
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title text-theme-500'>Audi Q3</h3>
                      <p className='text-theme-400'>
                        i had the best Experience with Urban Garadge ,I test
                        Drive their Audi Q3 at the chandighad showroom and on
                        the day of the test drive , i had a cap on intead of my
                        truban.
                      </p>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>14 jan 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-75.png&w=1920&q=75'
                          alt='Quais carros são mais vulneráveis'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link
                        to='#'
                        className='btn card-badge text-theme-semibold'
                      >
                        Naveen Mishra
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title text-theme-500'>
                        <Link to='#'>Hyundai Verna</Link>
                      </h3>
                      <p className='text-theme-400'>
                        It was amazing experience... The gesture..the quality of
                        work ..the process ..it's all of the excellent
                        quality...thanks @Urban Garadge for the amazing
                        experience 👍👍
                      </p>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>Jan 22, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-48.png&w=1920&q=75'
                          alt='As estatísticas mostraram qual idade média'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link to='#' className='btn card-badge'>
                        Naveen Mishra
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title text-theme-500'>
                        <Link to='#'>BMW GT</Link>
                      </h3>
                      <p className='text-theme-400'>
                        It was amazing experience... The gesture..the quality of
                        work ..the process ..it's all of the excellent
                        quality...thanks @Urban Garadge for the amazing
                        experience 👍👍
                      </p>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>feb 10, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-50.png&w=1920&q=75'
                          alt='O que é necessário ao alugar um carro?'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link to='#' className='btn card-badge'>
                        Carros
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title'>
                        <Link to='#'>
                          O que é necessário ao alugar um carro?
                        </Link>
                      </h3>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>Janeiro 14, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-26.png&w=1920&q=75'
                          alt='Novas regras para lidar com nossos carros'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link to='#' className='btn card-badge'>
                        Empresa
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title'>
                        <Link to='#'>
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>Janeiro 14, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-45.png&w=1920&q=75'
                          alt='Novas regras para lidar com nossos carros'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link to='#' className='btn card-badge'>
                        Empresa
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title'>
                        <Link to='#'>
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>Janeiro 14, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-36.png&w=1920&q=75'
                          alt='Novas regras para lidar com nossos carros'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link to='#' className='btn card-badge'>
                        Empresa
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title'>
                        <Link to='#'>
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>Janeiro 14, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='blog-card'>
                    <figure className='card-banner'>
                      <Link to='#'>
                        <img
                          src='https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-29.png&w=1920&q=75'
                          loading='lazy'
                          className='w-100'
                        />
                      </Link>

                      <Link to='#' className='btn card-badge'>
                        Empresa
                      </Link>
                    </figure>

                    <div className='card-content'>
                      <h3 className='h3 card-title'>
                        <Link to='#'>
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className='card-meta'>
                        <div className='publish-date'>
                          <ion-icon name='time-outline'></ion-icon>

                          <time dateTime='2022-01-14'>Janeiro 14, 2022</time>
                        </div>

                        <div className='comments'>
                          <ion-icon name='chatbubble-ellipses-outline'></ion-icon>

                          <data value='114'>114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default RecentWork;
