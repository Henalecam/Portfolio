import Hero from './components/Hero'
import { ParticlesComponent } from './components/ParticlesComponent'
export function App() {
  return (
    <>
    <div id='Hero' className=" z-[-1] bg-gradient-to-br from-stone-800  via-stone-700 via-70% to-neutral-600 h-screen">
        <Hero />

    <div className='h-[5000px]'>
    </div>

    <ParticlesComponent />
    </div>
    </>
  )
}