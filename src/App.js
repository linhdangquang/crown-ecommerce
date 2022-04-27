import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication';
import Home from './routes/Home/Home';
import Navigator from './routes/Navigation/Navigation';
import Checkout from './routes/Checkout/Checkout';
import Shop from './routes/Shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
