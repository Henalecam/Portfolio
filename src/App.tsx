import Hero from './components/Hero'
import { ParticlesComponent } from './components/ParticlesComponent'
export function App() {
  return (
    <>
    <ParticlesComponent />
    <div className="bg-gradient-to-tr from-primary  via-secondary via-70% to-tertiary">
    <div className='bg-gradient-to-br from-transparent to-primary '></div>
    <section id="Hero-Space" className='bg-gradient-to-b from-primary to-transparent to-70% h-screen w-screen inline-block bg-opacity-25 bg-cover'>
        <div  >
        <Hero />
        </div>
    </section> 

    <div className='h-[5000px]'></div>

    </div>
    </>
  )
}