import react from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components/Home/Home';
import AddPeople from './Components/AddPeople/AddPeople';
import ViewData from './Components/ViewPeople/ViewData';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddPeople />} />
          <Route path='/display' element={<ViewData />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
