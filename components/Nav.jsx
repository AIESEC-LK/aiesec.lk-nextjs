import Image from 'next/image';
// import AiesecLogo from './Icons/bluelogo.png';
import AiesecLogo from '../public/assets/images/bluelogo.png'
import '@styles/globals.css';

function Nav() {
  return (
    <nav className=' grid grid-cols-3 h-20 bg-white fixed z-50 w-full'>
      <div className='flex md:flex-row  flex-col justify-center items-center'>
        <Image src={AiesecLogo} alt="AIESEC Logo" width={170} className='hidden lg:block items-center mt-3'/>
        {/* hidden lg:block */}
        
      </div>
      <div className='lg:static absolute bg-white lg:min-h-fit min-h-[60vh] left-0 top-[9%] lg:w-auto w-full  col-span-2'>
        <ul className="flex lg:flex-row flex-col xsm:items-center md:gap-[4vw] gap-10 pt-6">
          <li>
            <a href="">Home</a>
          </li>
          <li>
          <a href="">Who Are We</a>
          </li>
          <li>
            <a href="">Opportunities</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li> 
          <li>
            <a href="">Updates</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
          <ion-icon onclick="onToggleMenu(this)" name="menu-outline" className="text-3xl cursor-pointer xl:hidden"></ion-icon>
        </div>
    </nav>
  );
}

export default Nav;
