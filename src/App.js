import logo from './logo.svg';
import './App.css';
import {Route, Routes, Switch,BrowserRouter} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

 const App = () => {
   console.log(Login);
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/home' element={<Home />} />
        </Routes>  
        </BrowserRouter>
    </div>
  );
}

export default App;
