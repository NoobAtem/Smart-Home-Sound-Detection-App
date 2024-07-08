import React from 'react'
import AtomicLogo from '../../assets/logo.png'
import '../../output.css'
const footer = () => {
  return (
    <div>
        <footer className="bg-gray-600 text-white py-2 px-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={AtomicLogo} alt="Smart Home Sound Detection App Logo" className="h-10- w-15 mr-2"/>
                <span className="text-sm">Smart Home Sound Detection App</span>
                
            </div>
            <div className="text-sm">
                <a href="mailto:support.atomic@gmail.com" className="hover:underline">Email us: support.atomic@gmail.com</a>
            </div>
            <div className="text-sm">
                © 2024 Smart Home Sound Detection App. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default footer