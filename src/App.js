import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication';
import Home from './routes/Home/Home';
import Navigator from './routes/Navigation/Navigation';
import Checkout from './routes/Checkout/Checkout';
import Shop from './routes/Shop/Shop';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />

        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
