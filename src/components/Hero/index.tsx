import arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center relative mt-[50px] md:mt-[100px]">
      <h1 className="flex-1 py-5 text-center text-4xl md:text-5xl lg:text-7xl font-bold mt-5 md:text-left">
        Hello, I’m <br />
        Mehmet Akfi.
      </h1>
      <p className="flex-1 text-center text-[#606060] px-5 pt-5 md:self-end md:text-left md:-mb-[50px] lg:-mb-0 md:text-3xl text-2xl">
        A senior-year design student who trying to specialize in 3D modeling &
        texturing.
      </p>
      <img
        src={arrow}
        alt="arrow"
        className="absolute left-5 md:left-0 -bottom-[100px] w-[30px] h-[30px]"
      />
    </div>
  );
};

export default Hero;
