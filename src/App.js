import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListStgs from './components/listStgs';
import DetailsStgs from './components/DetailsStgs';
import AddStgs from './components/AddStgs';
import { useState } from 'react';
import LogIn from './components/LogIn';

function App() {

  const [loggIn, setLoggin] = useState(false)
  return (

   <BrowserRouter>
    <Routes>
      <Route path='/' element={loggIn ? <ListStgs /> : <LogIn setlog={setLoggin} /> } />
      <Route path='/:nom' element={loggIn ?<DetailsStgs /> : <LogIn setlog={setLoggin} />} />
      <Route path='/add' element={loggIn ?<AddStgs /> : <LogIn setlog={setLoggin} />} />
      <Route path='/login' element={<LogIn setlog={setLoggin} />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
