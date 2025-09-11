import { useState } from 'react'
import Header from './components/Layout/Header'
import Body from './components/Body'
import Cart_section from './components/Cart_section'

const App = () => {
  const [displayCart, setDisplayCart] = useState(false)
  const [cart, setCart] = useState([]);
  console.log(cart,"cart")
  return (
    <div className="h-full relative">
      <Cart_section
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        cart={cart}
        setCart={setCart}
      />
      <Header setDisplayCart={setDisplayCart}/>
      <Body cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App