// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Body from './components/Body'
import Store from './components/Store'
import Details from "./components/Details";
function App() {
return (
  <div className="App">
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Body} ></Route>
        <Route path="/store" Component={Store} ></Route>
        <Route path="/:bookid" Component={Details} ></Route>
      </Routes>
    </BrowserRouter>

  </div>
  )
}

export default App
