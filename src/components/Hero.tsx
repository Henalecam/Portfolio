import Henrique from '../assets/Henrique.png';

import Github from '../assets/Github.svg';

import Linkedin from '../assets/Linkedin.svg';

import Whatsapp from '../assets/Whatsapp.svg';

function Hero() {
  return (
    <>
      <div className="family-roboto flex flex-col h-full justify-center w-full items-center mt-[10%] ">
        <img
          src={Henrique}
          alt=""
          className="mb-8 h-60 rounded-bl-full rounded-tl-full rounded-tr-full border-4 border-quinary bg-gradient-to-t from-primary to-cyan-700 p-1 pt-3"
        />

        <div id="invisible-back" className="flex flex-col text-center">
          <h1 className="bg-gradient-to-b from-quinary from-50% to-primary bg-clip-text font-mono text-7xl font-bold text-transparent">
            Henalecam
          </h1>
          <h2 className="bg-gradient-to-b from-quaternary to-tertiary bg-clip-text pt-5 font-mono text-5xl  text-transparent">
            Back-end Developer
          </h2>
          <div className="mt-5 flex justify-center space-x-8">
  <a href="">
    <img
      src={Github}
      alt=""
      className="h-16 rounded-full border border-primary bg-quinary"
    />
  </a>
  <a href="">
    <img
      src={Linkedin}
      alt=""
      className="h-16 rounded-full border border-primary bg-quinary"
    />
  </a>
  <a href="">
    <img
      src={Whatsapp}
      alt=""
      className="h-16 rounded-full border border-primary bg-quinary"
    />
  </a>
</div>

        </div>
      </div>
    </>
  );
}

export default Hero;
