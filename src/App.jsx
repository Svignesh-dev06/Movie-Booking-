import './App.css' 
import{Routes, Route} from "react-router-dom"
import Home from './pages/home';
import Login from './pages/login';
import Details from './pages/details';
import Addtocard from './pages/addtocard';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
    return(
     <>

     <Routes>
      
      <Route path='/' element={<Login />} />
       <Route  path='/home' element={<Home />}/>
       <Route  path='/details/:_id' element={<Details />}/>
       <Route path='/addtocard' element={<Addtocard />} />
       
     </Routes>
    
     </>
    );
}

export default App