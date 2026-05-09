import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Login } from './screens/Login'
import { Dashboard } from './screens/Dashboard'
import { Orders } from './screens/Orders'
import { Products } from './screens/Products'
import { Kitchen } from './screens/Kitchen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
