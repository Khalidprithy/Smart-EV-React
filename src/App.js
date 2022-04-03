import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/review' element={<Review></Review>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/chart' element={<Chart></Chart>}> </Route>
        <Route path='/*' element={<NotFound></NotFound>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
