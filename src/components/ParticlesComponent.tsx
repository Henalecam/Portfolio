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
      <Particles className='opacity-30'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
                
              },

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
              value: '#592519',
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
              enable: false,
            },
            collisions: {
              enable: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 200,
              max: 200,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 0.75, max: 2 },
            },
          },
          detectRetina: true,
        }}
        />
        </>
  );
};
