import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Products from './Components/Products';
import Register from './Components/Register';
import Cart from './Components/cart';





let routers = createBrowserRouter([
 {path:'/' , element:<Layout/> , children:[
  {path:'Home' , element:<Home/>},
  {path:'Categories' , element:<Categories/>},
  {path:'Footer' , element:<Footer/>},
  {path:'Login' , element:<Login/>},
  {path:'Products' , element:<Products/>},
  {path:'Register' , element:<Register/>},
  {path:'Cart' , element:<Cart/>},


  // {path:'*' , element:<Notfound/>},

 ] }
])

 
function App() {
  return (<RouterProvider router={routers}></RouterProvider>
  );
}

export default App; 
