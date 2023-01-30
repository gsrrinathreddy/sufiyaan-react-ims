import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sna from './Component/Sna';
import Cake from './Pages/Cake';
import Chocolate from './Pages/Chocolate';
import Icecream from './Pages/Icecream';
import Viewcart from './Component/Viewcart';


function App(props) {
  let p1=['Cake','Icecream','Chocolate']
  return (
    <div className="App">
      <BrowserRouter>
      <Sna pages={p1}></Sna>
      <Routes>
    <Route path='Cake'element={<Cake/>}/>
    <Route path='Chocolate'element={<Chocolate/>}/>
    <Route path='Icecream'element={<Icecream/>}/>
    <Route path='/ViewCart' element={<Viewcart/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
