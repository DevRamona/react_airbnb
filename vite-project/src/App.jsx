import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Cards from "./Components/Cards"
export default function App() {
  return (
    <div>
      <Cards
    img = "./src/images/kevin.webp"
    heading1 = "Come have fun with Kevin"
    paragraph = "Hosted by Hart"
    heading2 = "Coming this July"
    
    />
    <Cards
    img = "./src/images/doja.webp"
    heading1 = "Come have fun with Doja"
    paragraph = "Hosted by Cart"
    heading2 = "Coming this July"
    />
    <Cards
    img = "./src/images/tant.webp"
    heading1 = "Come have fun with Meddy"
    paragraph = "Hosted by Medard"
    heading2 = "Coming this July"
    />
    <Cards
    img = "./src/images/home.webp"
    heading1 = "Come have fun with Chris"
    paragraph = "Hosted by Eazy"
    heading2 = "Coming this July"

    />
    
    
  
    


    </div>
    
  )
}