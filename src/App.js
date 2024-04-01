import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListStgs from './components/listStgs';
import DetailsStgs from './components/DetailsStgs';
import AddStgs from './components/AddStgs';

function App() {
  return (
    
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListStgs />} />
      <Route path='/:nom' element={<DetailsStgs />} />
      <Route path='/add' element={<AddStgs />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
