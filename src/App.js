import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication';
import Home from './routes/Home/Home';
import Navigator from './routes/Navigation/Navigation';
import Checkout from './routes/Checkout/Checkout';
import Shop from './routes/Shop/Shop';
import { useEffect } from 'react';
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
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
