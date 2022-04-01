const Footer: React.FunctionComponent = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center mb-[50px]">
      <span className="text-lg text-[#2429AF] font-bold py-5 ">
        Mehmet Akif Karasu ⏤ 2022
      </span>
      <div className="flex flex-row gap-5 items-center">
        <a href="#twitter">Twitter</a>
        <a href="#twitter">Linkedin</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
