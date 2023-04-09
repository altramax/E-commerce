import './App.scss'
import { Routes, Route} from "react-router-dom"
import Home from './Components/pages/Home'
import MenWear from "./Components/pages/Menwear"
import WomenWear from './Components/pages/WomenWear'
import Accessories from './Components/pages/Accessories'
import Cart from './Components/pages/Cart'

function App() {

  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='MenWear' element={<MenWear/>}/>
         <Route path='WomenWear' element={<WomenWear/>}/>
         <Route path='Accessories' element={<Accessories/>}/>
         <Route path='Cart' element={<Cart/>}/>
       </Routes>
    </div>
  )}
  

export default App
