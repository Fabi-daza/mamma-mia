import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState , useEffect} from 'react';
import {MyContext} from './context/Mycontext'
import Home from './views/Home/Home';
import Pizza from './views/Pizza/Pizza';
import Carrito from './views/Carrito/Carrito';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(total)

  const getPizzas = async () => {
    const res = await fetch("./pizzas.json");
    let data = await res.json();
    setPizzas(data);
};
  
const addCart = (id) => {
  const index = cart.findIndex((p) => p.id === id);
  if (index >= 0) {
    cart[index].qty++;
    setCart([...cart]);
  } else {
    const updatedCart = [...cart, { id: id, qty: 1 }];
    setCart(updatedCart);
  }
};

  useEffect(() => {
    const calculateTotal = () => {
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const pizza = pizzas.find((p) => p.id === item.id);
        sum += pizza.price * item.qty;
      }
      setTotal(sum);
    };
  
    calculateTotal();
  }, [cart, pizzas]);

useEffect(() => {
    getPizzas(); 
}, []);


  return (
    <div className="App">
      <MyContext.Provider value={{
                    pizzas,
                    setPizzas,
                    cart,
                    setCart,
                    addCart,
                    total,
                    setTotal
                }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
      
      
    </div>
  );
}

export default App;
