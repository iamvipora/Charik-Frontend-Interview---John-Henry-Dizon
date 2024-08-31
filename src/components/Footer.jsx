import { FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <footer className='flex flex-col place-items-center w-full mt-4 pb-4 border-t'>
      <ul className='flex justify-between w-1/2 py-4'>
      {/* Component for footer which has company's social media links */}
        <li><a href='https://www.linkedin.com/company/charikapp/'><FaLinkedin className='h-8 w-8'/></a></li>
        <li><a href='https://x.com/charik_app'><FaSquareXTwitter className='h-8 w-8'/></a></li>
        <li><a href='https://www.instagram.com/charik_app/'><FaInstagramSquare className='h-8 w-8'/></a></li>
        <li><a href='https://www.facebook.com/charikapp'><FaFacebookSquare className='h-8 w-8'/></a></li>
        <li><a href='https://www.youtube.com/@Charikapp'><FaYoutube className='h-8 w-8'/></a></li>
      </ul>
      <span className='text-[#919191]'>Copyright © 2024 Charik</span>
    </footer>
  )
}

export default Footer