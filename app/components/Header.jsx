import { FaArrowCircleRight, FaArrowRight,FaBars } from "react-icons/fa";
export default function Header() {
  return (
    <div className="absolute z-[3] top-0 border-b border-white h-[100px] w-full">
      <div className="grid justify-between w-full grid-cols-2 lg:grid-cols-3 h-full px-10 xl:px-40">
        <div className="w-full flex items-center h-full">
          {/* <img src="/logo.png" alt="" className="h-[70px] w-[70px]" /> */}
          <span className="text-[#f2f2f2] text-2xl font-bold">ENDURAMALE.</span>
        </div>
        <ul className="text-white hidden lg:flex flex items-center font-medium text-lg justify-between">
          <li>Home</li>
          <li>Catalog</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <div className="items-center w-full justify-center hidden lg:flex">
          <a className="flex items-center text-white gap-2 hover:ring-1 py-2 px-4 bg-secondary rounded-3xl font-bold text-lg">
            Buy Now <FaArrowCircleRight></FaArrowCircleRight>
          </a>
        </div>
       <div className="grid items-center justify-end block lg:hidden"><FaBars className="text-white"></FaBars></div>
      </div>
    </div>
  );
}
