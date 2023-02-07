import './styles/App.css'
import Home from './Pages/Home/home';
import Login from './Pages/Login/Login';
import {useContext} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Leftbar from './Components/Leftbar/Leftbar';
import Rightbar from './Components/Rightbar/Rightbar';
import {Routes, Route } from 'react-router-dom';
import { AppContext} from './Context/AppContext';


function App() {

  const {user}=useContext(AppContext)
  return (
    <>
    <div className="App">      
        {!user?
              (<Login />) 
        :
              (
                <>                      
                        <Navbar />                            
                           <Routes>
                               <Route path='/' element={<Home />} />                                                                   
                           </Routes>                                                                                                                          
                         
                    </>  
              )
        }

    </div>
    </>
  );
}

export default App;
