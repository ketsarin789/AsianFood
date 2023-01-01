
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
import {WokPage} from '../src/page/WokPage'
import {ShopPage} from '../src/page/ShopPage'
import Footer from './components/Footer';
//import {PopularDetail} from './page/PopularDetail'
import PopularDetailPage from './page/PopularDetailPage';





function App() {
  return (
    <div className="App">
     <Header />
      <Second/>  
     <Routes>
          {/* <Route path="/header" element={<Header />}/>   */}

          <Route path="/" element={<Home/>}/> 
          <Route path="/home/:popularId" element={<PopularDetailPage/>}/> 

         <Route path="/about" element={<About />}/>
         <Route path="/appetizers" element={<AppetizersPage />}/>
         <Route path="/noodle" element={<NoodlePage />}/>
         <Route path="/salad" element={<SaladPage />}/>
         <Route path="/soup" element={<SoupPage />}/>
         <Route path="/curry" element={<CurryPage />}/>
         <Route path="/wok" element={<WokPage />}/>
         <Route path="/shop" element={<ShopPage />}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
