
import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import Home from '../src/page/HomePage'
import Second from './components/Second'
import About from '../src/page/AboutusPage'
import {AppetizersPage} from '../src/page/AppetizersPage'
import {NoodlePage} from '../src/page/NoodlePage'
import {SaladPage} from '../src/page/SaladPage';
import {CurryPage} from '../src/page/CurryPage';
import {SoupPage} from '../src/page/SoupPage'
import SoupDetailPage from '../src/page/SoupDetailPage';
import {ShopPage} from '../src/page/ShopPage'
import Footer from './components/Footer';
import {FriedRicePage} from '../src/page/FriedRicePage';
import {WoksPage} from '../src/page/WokPage'
import { WokDetaillPage } from '../src/page/WokDetailPage'
import PopularDetailPage from '../src/page/PopularDetailPage'
import SaladDetailPage from '../src/page/SaladDetailPage';
import FriedRiceDetailPage from '../src/page/FriedRiceDetailPage';
import CurryDetailPage from './page/CurryDetailPage';
import NoodleDetailPage from './page/NoodleDetailPage'
//import ShopDetailPage from './page/ShopDetailPage';
import CartProvider from './CartContext';




function App() {
  return (
    <CartProvider>
    <div className="App">
      <CartProvider></CartProvider>
     <Header />
      <Second/>  
     <Routes>
          {/* <Route path="/header" element={<Header />}/>   */}

          <Route path="/" element={<Home/>}/> 
          <Route path="/:popularId" element={<PopularDetailPage/>}/> 
           <Route path="friedrice" element={<FriedRicePage />}/>  
           <Route path="friedrice/:friedriceId" element={<FriedRiceDetailPage />}/> 
           <Route path="salads" element={<SaladPage />}/>
         <Route path="salads/:saladId" element={<SaladDetailPage />}/>
         <Route path="curry" element={<CurryPage />}/>
         <Route path="curry/:curryId" element={<CurryDetailPage />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/appetizers" element={<AppetizersPage />}/>
         <Route path="noodle" element={<NoodlePage />}/>
         <Route path="noodle/:noodleId" element={<NoodleDetailPage />}/>

         <Route path="soup" element={<SoupPage />}/>
         <Route path="soup/:soupId" element={<SoupDetailPage />}/>

         <Route path="wok" element={<WoksPage />}/>
         <Route path="wok/:wokId" element={<WokDetaillPage />}/>

         <Route path="shop" element={<ShopPage />}/>
         {/* <Route path="shop/:shopId" element={<ShopDetailPage />}/> */}

    </Routes>
    <Footer />
    </div>
    </CartProvider>
  );
}

export default App;
