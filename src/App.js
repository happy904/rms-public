import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MenuPage from './Components/Menu/MenuPage';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar"
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import ShopCart from './Components/ShopCart/ShopCart';
import CheckOut from './Components/CheckOut/CheckOut';
import ShopList from './ShopList/ShopList';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/shopcart' element={<ShopCart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/shoplist' element={<ShopList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
