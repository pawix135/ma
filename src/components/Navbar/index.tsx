const Navbar: React.FunctionComponent = () => {
  return (
    <header className="flex flex-row justify-between flex-wrap w-full">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-row">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#playground">Playgorund</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
