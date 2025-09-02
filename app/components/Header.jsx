import Link from "next/link";
import { FaArrowCircleRight, FaArrowRight, FaBars, FaBell } from "react-icons/fa";
export default function Header() {
  return (
    <div className="sticky z-[3] top-0 h-[80px] w-full bg-primary">
      <div className="grid justify-between items-center w-full grid-cols-2 lg:grid-cols-3 h-full px-10 xl:px-20">
        <div className="w-full flex relative right-5 items-center h-full">
          <img
            src="/ENDURAMALE-WHITE.png"
            alt=""
            className="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px]"
          />
          <span className="text-white text-md lg:text-2xl font-bold">ENDURAMALE</span>
        </div>
        
          <ul className="text-[#f1f1f1] hidden lg:flex flex items-center font-medium text-lg justify-between">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>Catalog</li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>Contact Us</li>
          </ul>
       

        <div className="items-center w-full hidden justify-end lg:flex">
          <FaBell className="text-white"></FaBell>
        </div>
        <div className="grid items-center justify-end block lg:hidden">
          <FaBars className="text-white"></FaBars>
        </div>
      </div>
    </div>
  );
}
