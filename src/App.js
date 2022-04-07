import logo from './logo.svg';
import './App.css';
import { RestaurantDetails } from './Components/RestaurantDetails/RestaurantDetails';
import { Route, Routes } from 'react-router-dom';
import { AddRestaurant } from './Components/AddRestaurant/AddRestaurant';

function App() {
  return (
    <div className="App">
      
       <Routes>
       <Route path="/" element={<RestaurantDetails/>}></Route>
       <Route path="/addrestaurant" element={<AddRestaurant/>} />
       </Routes> 
    </div>
  );
}

export default App;
