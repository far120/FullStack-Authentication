import { Link, Route, Routes } from 'react-router-dom';
import Login from './pages/authentication/regester & login/login';
import Signup from './pages/authentication/regester & login/signup';
import Auth from './pages/authentication/userdata/auth';
import ShowAuth from './pages/authentication/userdata/show';
import Update from './pages/authentication/userdata/updates';
import NavBar from './pages/authentication/navbar/nav';
import Profile from './pages/authentication/userdata/profile';
import Home from './pages/homepage/home';
 
function App() {
  return (
    <>
    <NavBar />
     <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route  path="/login" element={<Login />} />
      <Route  path="/signup" element={<Signup />} />
      <Route  path="/auth" element={<Auth />} />
      <Route  path="/auth/:id" element={<ShowAuth />} />
      <Route path="/updates/:id" element={<Update />}/> 
      <Route path="/profile" element={<Profile />} />
    </Routes>
   
  
     
    </>
  );
}

export default App;
