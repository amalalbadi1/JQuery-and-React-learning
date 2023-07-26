import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FeaturedProducts from './components/FeaturedProducts';
import Product2 from './components/Products2';
import Git from './components/Git';
import Home from './components/Home';
import News from './components/News';
import Products2 from './components/Products2';
import './components/Stayl.css'
function App() {
  return (
  //  <Register/>
  //  <Git/>
  // <Home />
  // <Products2 />
  // <News />
  <>
  
  <div>
        <Switch>
          <Route exact path='Products2' component={FeaturedProducts} />
          <Route exact path='/products2/:id' component={Products2} />
        </Switch>
      </div>
  
  </>
  );
}

export default App;
