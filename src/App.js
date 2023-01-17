import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Learn from './components/pages/learn more/learn'
import Bookmark from './components/bookmark/Bookmark';
import Imoji from './components/bookmark/Imoji';
import Nav from './components/Nav';
import Home from './components/pages/Home';


function App() {
  return(
    <div>
      {/*  Wrapping using react router  dom */}
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/emoji-love94823483' element={<Imoji />}/>
        <Route path='/user/:name' element={<Bookmark/>}/>
        <Route path='/learnmore34343+about+order+status' element={<Learn />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;