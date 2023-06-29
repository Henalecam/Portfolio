import Hero from './components/Hero'
import { ParticlesComponent } from './components/ParticlesComponent'
export function App() {
  return (
    <>
    <ParticlesComponent />
    <div className="bg-gradient-to-tr from-primary  via-secondary via-70% to-tertiary">
    <div className='bg-gradient-to-br from-transparent to-primary '></div>
        <Hero />
    <div className='h-[5000px]'>

    </div>

    </div>
    </>
  )
}