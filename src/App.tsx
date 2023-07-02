import Hero from './components/Hero';
import NavBar from './components/NavBar';
import { ParticlesComponent } from './components/ParticlesComponent';
export function App() {
  return (
    <>
      
        <ParticlesComponent />
        <NavBar />
        <div className="bg-gradient-to-tr from-primary  via-secondary via-70% to-tertiary">
          <div className="bg-gradient-to-br from-transparent to-primary "></div>
          <header
            id="Hero-Space"
            className="inline-block h-full w-full bg-opacity-25 bg-gradient-to-b from-primary to-transparent to-70% bg-cover"
          >
            <div>
              <Hero />
            </div>
          </header>

          <div className="h-[2000px]"></div>
        </div>
    </>
  );
}
