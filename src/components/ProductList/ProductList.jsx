import { MyContext } from '../../context/Mycontext'
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import './ProductList.css';

const ProductList = () => {
    const { pizzas} = useContext(MyContext);
    const { addCart} = useContext(MyContext);
    
    const navigate = useNavigate();

    const selectPizza = (pizza) =>{
        navigate(`/pizza/${pizza.id}`)
    }

  return (
    <div>
        <div className="product-list">
                {pizzas.map((pizza) => (
                    <div className="product-card" id={pizza.id} key={pizza.id}>
                        <div className="img-container">
                            <img src={pizza.img} alt={pizza.name} />
                        </div>
                        <h2>
                            {pizza.name.charAt(0).toUpperCase() +
                                pizza.name.slice(1)}
                        </h2>
                        <p>{pizza.ingredients.join(", ")}</p>
                        <p><b>${pizza.price}</b></p>
                        <button className='add-product' onClick={() => addCart(pizza.id)}> Añadir </button>
                        <button className='more-info' onClick={() => selectPizza(pizza)}> Ver más</button>
                    </div>
                ))}
            </div>
    </div>
  )
                            }
export default ProductList;