import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';
import Spinner from './components/Spinner/Spinner';

const Home = lazy(() => import('./routes/Home/Home'));
const Authentication = lazy(() =>
  import('./routes/Authentication/Authentication')
);
const Navigator = lazy(() => import('./routes/Navigation/Navigation'));
const Shop = lazy(() => import('./routes/Shop/Shop'));
const Checkout = lazy(() => import('./routes/Checkout/Checkout'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigator />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />

          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
