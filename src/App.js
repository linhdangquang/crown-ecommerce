import {  Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigator from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn/SignIn';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
