import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KeyFeatures from '../components/KeyFeatures'
import KeyFeaturesData from '../components/KeyFeaturesData'
import HeroImg from '/images/hero-img.webp'

function Index() {
  //For navigating to a different page
  const navigate = useNavigate()

  //Data mapping for the key features
  const renderKeyFeatures = KeyFeaturesData.map((item, key) => {
    return (
      <KeyFeatures 
        key={key}
        item={item}
      />
    )
  })
  return (
    <div className='w-full px-4 font-montserrat text-white font-medium md:px-6 lg:px-8 xl:px-16 2xl:px-96'>
      <NavBar />
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='flex flex-col md:justify-between md:w-1/2'>
            <h1 className='text-4xl font-semibold lg:text-5xl xl:text-6xl'>Get the Sales Intelligence made for <span className='text-[#FF7C57]'>HubSpot</span></h1>
            <img 
              className='my-2 md:hidden' 
              src={HeroImg} 
              alt='Hero Image'
            />
            <p className='text-lg text-center text-[#919191] md:text-left'>Add contacts and companies from anywhere: LinkedIn, the web, ... and even HubSpot itself.</p>
            <h1 className='my-4 text-3xl text-center text-[#3096E4] font-semibold md:text-left lg:text-4xl xl:text-5xl'> Save Time, Sell More.</h1>
            <div className='flex justify-center w-full md:justify-start'>
              <button
                tabIndex={0}
                className='border rounded-full p-4 hover:text-[#1A1A1A] relative flex items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:before:h-56 hover:before:w-56'
                onClick={() => navigate('/pricing')}
              >
                <span className="relative z-10">Discover Our Offers</span>
              </button>
            </div>
          </div>
          <div className='w-1/2 hidden md:block lg:px-14 xl:px-20'>
            <img 
              src={HeroImg} 
              alt='Hero Image'
            />
          </div>
        </div>
        <h1 className='mt-10 mb-2 text-4xl font-semibold lg:text-center'>We aim to make Sales Intelligence available for every <span className='text-[#FF7C57]'>HubSpot</span> Users</h1>
        <p className='text-lg text-[#919191] lg:text-center'>We streamline data entry and information gathering for sales reps to focus on client engagement and closing deals.</p>
        <h1 className='mt-10 mb-2 text-4xl font-semibold lg:text-center'>Key Features</h1>
        <p className='mb-4 text-lg text-[#919191] lg:text-center'>Our clients save an average of 8 hours per month by connecting Charik to HubSpot, thanks to our advanced features, which are often unique at this level of integration with your favorite CRM.</p>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3'>
          {/* JSX rendering for the mapped key features */}
          {renderKeyFeatures}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index