import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact'
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase'
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart'

function App() {
  return (
    
      <Router>
       <NavBar />
       <FloatingCart/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/produits" component={Products} />
         <Route exact path="/produits/:id" component={ProductShowcase} />
         <Route exact path="/shoppingCart" component={ShoppingCart} />
         <Route exact path="/contact" component={Contact} />
       </Switch>
      </Router>
    
  );
}

export default App;
