import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Body from './components/Body'
import Cart_section from './components/Cart_section'

const App = () => {
  const [displayCart, setDisplayCart] = useState(false)
  console.log(displayCart)
  return (
    <div className="h-full relative">
      <Cart_section displayCart={displayCart} setDisplayCart={setDisplayCart} />
      <Header setDisplayCart={setDisplayCart} />
      <Body />
    </div>
  );
}

export default App