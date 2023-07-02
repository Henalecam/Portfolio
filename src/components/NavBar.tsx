import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="flex justify-between items-center font-bold text-lg  h-16 bg-quinary text-secondary relative shadow-sm font-mono" role="navigation">
        <a href="" className="p-4">Henalecam</a>
        <div className="pr-8 md:block">
          <a href="" className="p-4 hover:text-tertiary">About</a>
          <a href="" className="p-4 hover:text-tertiary">Projects</a>
          <a href="" className="p-4 hover:text-tertiary">Contact</a>
        </div>
      </nav>
    </div>


    )
}

export default NavBar