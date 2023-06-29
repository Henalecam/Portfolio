import Henrique from '../assets/Henrique.png';
function Hero() {
  return (
    <div className="family-roboto flex h-screen w-full items-center justify-center">
      <div id="invisible-back" className="flex flex-col">
        <h1 className="bg-gradient-to-t from-quinary to-primary bg-clip-text text-7xl text-transparent">
          Henrique Alexandre de Camargo
        </h1>
        <h2 className="bg-gradient-to-b from-quaternary to-tertiary bg-clip-text pt-5 text-5xl  text-transparent">
          Back-end Developer
        </h2>
      </div>
    </div>
  );
}

export default Hero;
