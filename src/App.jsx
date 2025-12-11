import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import RootLayout from './pages/Root.jsx'
import ErrorPage from './pages/Error.jsx'
import ProducDetails from './pages/ProductDetails.jsx'

const router = createBrowserRouter([  
  { path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <Products/> },
      { path : '/products/:productId', element: <ProducDetails /> }
    ] 
   },
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
