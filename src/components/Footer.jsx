import logo2 from "../assets/logo2.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full justify-around min-h-100 items-center border-t gap-10  p-10 bg-gray-200">
        <div className="h-50 w-60 flex justify-center items-start">
          <img src={logo2} alt="" className="h-40" />
        </div>
        <ul className="flex flex-col lg:flex-row items-start justify-around gap-15">
          <li>
            <p className="text-lg font-medium pb-3">About Gym</p>
            <ul className="text-sm font-medium flex flex-col gap-2">
              <li>About Us</li>
              <li>GymNation App</li>
              <li>Gym Near Me</li>
              <li>Refer A Friend</li>
              <li>Member Reviews</li>
              <li>Day Pass Registration</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-medium pb-3">Classes</p>
            <ul className="text-sm font-medium flex flex-col gap-2">
              <li>All GymNation Classes</li>
              <li>GymNation Class Timetable</li>
              <li>GymNation Signature</li>
              <li>GymNation On Demand</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-medium pb-3">Corporeal</p>
            <ul className="text-sm font-medium flex flex-col gap-2">
              <li>Property</li>
              <li>Press</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </li>
        </ul>
        <div>
          <p className="text-2xl font-bold text-center">Join Us!</p>
          <div className="bg-gray-400 rounded flex items-center w-75 h-10 justify-center ">
            <input type="text" placeholder="Enter your email" className=" h-9 w-70" />
            <button className="text-sm font-medium flex items-center w-20 h-10 bg-gray-700 justify-center rounded-r-sm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
