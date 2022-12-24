import './App.scss';
import Login from './Login/Login';
import { Route, Routes } from 'react-router-dom';
import List from './List/List';

function App() {
  return (

        
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<List />} />
        </Routes>

      </div>

  );
}

export default App;
