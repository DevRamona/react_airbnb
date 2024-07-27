import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Admin from "./Components/Admin"
import Community from "./Components/Community"
import Expert from "./Components/Expert"
import Market from "./Components/Market"
import Prices from "./Components/MarketPrices"
import Weather from "./Components/Weather"
import DashboardContent from './Components/DashboardContent'


import './App.css'
// import Cards from "./Components/Cards"


export default function App() {
 
  return (
    <div>
      <Admin/>
      <DashboardContent/>
      <Community/>
      <Expert/>
      <Market/>
      <Prices/>
      <Weather/>
      
      

    </div>
    
    
  )
}