import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (<>
      <Particles className='opacity-50 z-[-1] fixed top-0 left-0 w-screen h-screen'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 50,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            move: {
              direction: 'bottom',
              enable: true,
              outModes: 'out',
              random: false,
              speed: 2,
              straight: false,
            },
            links: {
              color: '#00ddff',
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 3,
            },
            collisions: {
              enable: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: 'min',
                count: 1,
                destroy: 'min',
              },
              value: {
                min: 0,
                max: 0.5,
              },
            },
            shape: {
              type:'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        />
        </>
  );
};
