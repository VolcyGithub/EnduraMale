import Link from "next/link";
import { FaArrowCircleRight, FaArrowRight,FaBars } from "react-icons/fa";
export default function Header() {
  return (
    <div className="absolute z-[3] top-0 border-b border-white h-[100px] w-full">
      <div className="grid justify-between w-full grid-cols-2 lg:grid-cols-3 h-full px-10 xl:px-40">
        <div className="w-full flex relative right-5 items-center h-full">
          <img src="/ENDURAMALE-BEIGE.png" alt="" className="h-[70px] w-[70px]" />
          <span className="text-secondary text-2xl font-bold">ENDURAMALE.</span>
        </div>
        <ul className="text-white hidden lg:flex flex items-center font-medium text-lg justify-between">
          <li><Link href={'/'}>Home</Link></li>
          <li>Catalog</li>
          <li><Link href={'/about'}>About Us</Link></li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <div className="items-center w-full justify-center hidden lg:flex">
          <a className="main-btn">
            Buy Now <FaArrowCircleRight></FaArrowCircleRight>
          </a>
        </div>
       <div className="grid items-center justify-end block lg:hidden"><FaBars className="text-white"></FaBars></div>
      </div>
    </div>
  );
}
