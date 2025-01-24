import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center gap-1">
          <img src={logo} alt="sumz_logo" className="w-16 object-contain" />
          <h1 className="font-inter text-[2rem] font-bold">Artisum</h1>
        </div>

        <button
          type="button"
          onClick={() => window.open("https://github.com/thlicudo/Aritsum")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles <br className="max-md:hidden" />
        with
        <span className="orange_gradient"> AI</span>
      </h1>

      <h2 className="desc">
        Effortless reading with Summize—the open-source tool that turns long
        articles into crisp, clear summaries in seconds!
      </h2>
    </header>
  );
};
export default Hero;
