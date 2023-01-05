import './App.css';
import { GroceryList } from './GroceryList';

import image from './shopping.jpg';
import imageMan from './man.jpg'; 


function App() {
  return (
    
    <div className='app'>
      <div className="container"> 
      <img src={image} alt = 'shopping' width='300px' />
      </div>
      <div className="container"> 
        <h1>Grocery List</h1>
        </div>
         
        <GroceryList />
        
        <div className="container"> 
        <img src={imageMan} alt = 'man' width='300px' />
        </div>
    </div>
    
  );
}

export default App;
