import logo from "../../assets/site-logo.png";

const Navbar: React.FunctionComponent = () => {
  return (
    <header className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center flex-wrap w-full py-3 px-3">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-row gap-5 items-center text-[16px]">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#playground">Playgorund</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
