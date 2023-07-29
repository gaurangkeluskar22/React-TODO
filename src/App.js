import Header from "./Components/Header";
import Create from "./Components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import SearchDetails from "./Components/SearchDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exect path="/" element={<Home/>}/>
            <Route  exect path="/Create" element={<Create/>}/>
            <Route exect path="/Edit/:index" element={<Edit/>}/>
            <Route exect path="/SearchDetails" element={<SearchDetails/>}/>
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
