const Footer: React.FunctionComponent = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center mb-[50px]">
      <span className="text-lg text-[#2429AF] font-bold py-5 ">
        Mehmet Akif Karasu ⏤ 2022
      </span>
      <div className="flex flex-row gap-5 items-center">
        <a href="https://github.com/pawix135">Github</a>
        <a href="https://www.figma.com/community/file/829474905036527548">
          Figma
        </a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
