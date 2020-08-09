import React,{useState} from 'react';
import './App.scss';
import ProductCard from './components/ProductCard/ProductCard.component';

function App() {
  const pizzas =[{
    name:"Chicken Mushroom Pizza",
    price:900,
    image:"images/chickenmushrooms.jpg"
  },
  {
    name:"Chicken Mushroom Pizza",
    price:900,
    image:"images/chickenmushrooms.jpg"
  },
  {
    name:"Chicken Mushroom Pizza",
    price:900,
    image:"images/chickenmushrooms.jpg"
  },{
    name:"Chicken Mushroom Pizza",
    price:900,
    image:"images/chickenmushrooms.jpg"
  },
  {
    name:"Chicken Mushroom Pizza",
    price:900,
    image:"images/chickenmushrooms.jpg"
  },]
  const [products, setProducts] = useState([1,2,3,4,5,6,6,7,8])

  return (
    <div className="container">
      <div className="row">
        {pizzas.map(element=>
        <div className="col-md-4 py-4">        
        <ProductCard product={element}/>
        </div>
        )}
      </div>

    </div>
    
  );
}

export default App;
