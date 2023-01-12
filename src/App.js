import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'

const App = () => {
  return (
    <div className='app'>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path='/' element={<Landing/>}></Route>
            {/*<Route path='*' element={<Notfound/>}></Route>*/}
          </Routes>
          {/* <Faq/> */}
          {/* <Footer/> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
