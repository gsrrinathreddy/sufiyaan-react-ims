import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from 'axios';
import Imnavbar from './Components/Imnavbar';
import Cake from './Pages/Cake';
import Flowers from './Pages/Flowers';
import Icecream from './Pages/Icecream';
import Birthday from './Pages/Cake';
import Viewcart from './Pages/Viewcart';
import Flowercard from './Components/Flowercard';
function App() {

  
  let p1=['Cake','Flowers','Birthday','Icecream']
  return (
    
    
    <div className="App">
     <BrowserRouter>
     <Imnavbar pages={p1}></Imnavbar>
  <Routes>
  <Route path='Cake'element={<Cake/>}/>
  <Route path='Flowers'element={<Flowers/>}/>
  <Route path='Birthday'element={<Birthday/>}/>
  <Route path='Icecream'element={<Icecream/>}/>
  <Route path='/cart' element={<Viewcart/>}/>
  </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
