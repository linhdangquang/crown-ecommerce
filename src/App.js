import {  Route, Routes } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication';
import Home from './routes/Home/Home';
import Navigator from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
