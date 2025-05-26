import logo2 from "../assets/logo2.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center w-full h-25 border-b bg-gray-300 ">
          <div className="h-20 w-70 flex justify-center items-center">
            <img src={logo2} alt="" className="h-20 " />
          </div>
          <ul className="hidden  lg:flex justify-center items-center gap-10 text-lg font-medium text-gray-800">
            <li className="hover:text-black">Home</li>
            <li className="hover:text-black">About</li>
            <li className="hover:text-black">Contact</li>
            <li className="hover:text-black">Support</li>
          </ul>
          <div className="w-80 hidden lg:flex  justify-center items-center gap-5">
            <button className="text-lg font-medium h-12 w-25 border rounded-lg text-black hover:border-2 hover:bg-gray-500">
              Register
            </button>
            <button className="text-lg font-medium h-12 w-25 border rounded-lg  text-black hover:border-2 hover:bg-gray-500">
              Login
            </button>
          </div>
           <div>
             <p className="text-2xl text-black lg:hidden flex w-40  justify-center items-center"><RxHamburgerMenu /></p>
           </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
