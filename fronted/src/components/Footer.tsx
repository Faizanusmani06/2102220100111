const Footer = () => {
    return (
      <div className="bg-blue-600 py-5">
        <div className="md:container mx-auto flex justify-between items-center">
          <span className="flex flex-col">
          <div className="text-3xl text-white font-bold tracking-tight">
            Reservation
          </div>
          <div className="text-sm text-white font-semibold opacity-50">
            Developed by <a href="https://github.com/Faizanusmani06">Moh Faizan</a>
          </div>
          </span>
          <span className="text-white font-bold tracking-tight flex flex-col md:flex-row gap-2 md:gap-4">
            <p className="cursor-pointer text-center">Privacy Policy</p>
            <p className="cursor-pointer">Terms of service</p>
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;
  