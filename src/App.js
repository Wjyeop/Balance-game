import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path='Balance-game' element={<Main/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
