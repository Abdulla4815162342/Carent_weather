
import "./components/Widget.css"
import "./components/Button.css"
import "./components/Table.css"
import "./App.css"

import { Routes,Route,Link } from "react-router-dom"
import Widget from "./components/Widget";
import { Contacts } from "./components/Contacts";
import Img from "./components/img"
import Img2 from "./components/img 2"

function App() {
    return (
      
    <div className="App">
    <div className="black ">
    <div>
        <Link to="/Img">
          <img src={require('./img/pogoda.svg').default} alt='mySvgImage'  className="img"/>
        </Link>
        
      
        </div>
       <div>
       <Link to="/Img2"  className="header2"> Weather forecast</Link>
       <Link to="/Contacts"  className="btn"> Contacts</Link>
       <Link to="/Img" className="btn"> Home</Link>
         <Link to="/widget" className="btn"> Widget</Link>
         
         
         </div>
         </div>
          <Routes>
            <Route path="/contacts" element={  <Contacts />}/>
            <Route path="/widget" element={  <Widget />}/>
            <Route path="/img" element={  <Img />}/>
            <Route path="/img2" element={  <Img2 />}/>
          </Routes>
          </div>
    
  );
}

export default App;
