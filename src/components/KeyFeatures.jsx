function KeyFeatures({ item }) {
  // Component for rendering the key feature's data
  return (
    <div className='flex border p-4 rounded-3xl'>
      <div className='flex items-center pr-4'>
        <div className='flex place-content-center items-center h-12 w-12 bg-white rounded-full'>
          {item.icon}
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-lg'>{item.feature}</h1>
        <p className='text-sm text-[#919191]'>{item.description}</p>
      </div>
    </div>
  )
}

export default KeyFeatures