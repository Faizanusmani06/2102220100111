import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-blue-600 p-6 -mb-1 overflow-x-clip">
        <div className="md:container mx-auto flex justify-between">
          <span className="flex gap-0 md:gap-3 text-white font-bold tracking-tight mr-5 md:px-1 md:shadow-md">
            <Link to="/" className="flex gap-0 md:gap-3 ">
              <img
                src="/train.png"
                alt="logo"
                className="h-[80px] md:h-[60px] lg:h-[40px] object-cover"
              />
              <p className="text-white hidden md:block font-bold text-3xl">Reservation</p>
            </Link>
          </span>
          <span className="flex md:space-x-2">
            <ModeToggle/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
