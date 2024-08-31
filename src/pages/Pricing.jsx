import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KeyFeatures from '../components/KeyFeatures'
import KeyFeaturesData from '../components/KeyFeaturesData'
import PricingBox from '../components/PricingBox'
import PricingData from '../components/PricingData'

function Pricing() {
  // Data mapping for the key features
  const renderKeyFeatures = KeyFeaturesData.map((item, key) => {
    return (
      <KeyFeatures 
        key={key}
        item={item}
      />
    )
  })

  // Data mapping for the different pricing depending on subscription type
  const renderPricingBox = PricingData.map((item, key) => {
    return (
      <PricingBox 
        key={key}
        item={item}
      />
    )
  })

  return (
    <div className='w-full px-4 font-montserrat text-white font-medium md:px-6 lg:px-8 xl:px-16 2xl:px-96'>
      <NavBar/>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
          {/* JSX rendering for the mapped pricing data */}
          {renderPricingBox}
        </div>
        <div className='flex flex-col'>
          <h1 className='mt-10 mb-2 text-4xl font-semibold lg:text-center'>Key Features</h1>
          <p className='mb-4 text-lg text-[#919191] lg:text-center'>Our clients save an average of 8 hours per month by connecting Charik to HubSpot, thanks to our advanced features, which are often unique at this level of integration with your favorite CRM.</p>
          <div className='flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3'>
            {/* JSX rendering for the mapped key features */}
            {renderKeyFeatures}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pricing

