const HomePageHeader = () => {
  return (
    <header className="border-box m-0 p-0 w-full">
      <div
        className="relative  min-h-[50vh] md:min-h-[60vh] sm:min-h-[34rem] lg:h-[30rem] p-0 m-0
      w-full overflow-hidden bg-sky-500 
      after:absolute after:bg-white after:w-full after:h-96  
      after:left-0 after:bottom-[-12rem] 
      after:origin-center after:skew-y-[-30deg] 
      sm:after:skew-y-[-12deg] lg:after:skew-y-[-7deg]
      "
      ></div>
    </header>
  );
};

export default HomePageHeader;
