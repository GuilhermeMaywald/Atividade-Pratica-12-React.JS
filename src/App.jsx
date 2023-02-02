import { useState } from 'react'

import ClickCounter from './components/ClickCounter'
import InputCounter from './components/InputCounter'
import ProductList from './components/ProductList'

function App() {
  const [produtos, setProdutos] = useState(["produto 1", "produto 2"])

  return (
    <div>
      <InputCounter/>
      <ClickCounter/>
      <ProductList produtos={produtos}/>
    </div>
  )
}

export default App
