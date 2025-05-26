function Main() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-10 min-h-screen p-10">
        <div className=" ">
          <img
            src="https://i.pinimg.com/736x/1e/a5/f2/1ea5f2e167afa332df364fc23495fa15.jpg"
            alt=""
            className="h-100 rounded-2xl"
          />
        </div>
        <div className="w-100 flex flex-col items-left gap-10">
          <p className="text-6xl font-bold text-center lg:text-left">JOIN US!</p>
          <p className="text-lg font-medium text-center lg:text-left">
            Your go-to destination for fresh, flavorful chewing gums. Explore a
            variety of minty, fruity, and sugar-free options designed to keep
            you refreshed and smiling all day!
          </p>
          <div className="w-80 flex justify-center items-center gap-5">
            <button className="text-lg font-medium h-12 w-25 border rounded-lg text-black hover:border-2 hover:bg-gray-500">
              Register
            </button>
            <button className="text-lg font-medium h-12 w-25 border rounded-lg  text-black hover:border-2 hover:bg-gray-500">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
