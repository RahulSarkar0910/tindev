import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signin />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
