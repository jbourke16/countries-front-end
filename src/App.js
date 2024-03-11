import './App.css';
import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Countries from './screens/Countries.jsx';
import CountryDetail from './screens/CountryDetail.jsx';
import CountryCreate from './screens/CountryCreate.jsx';
import CountryEdit from './screens/CountryEdit.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:id' element={<CountryDetail />} />
          <Route path='/add-country' element={<CountryCreate />} />
          <Route path='/countries/:id/edit' element={<CountryEdit />} />
        </Routes>
    </div>
  );
}

export default App;
