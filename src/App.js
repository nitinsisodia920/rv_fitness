import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
// import Checkout from './screens/Checkout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aboutus from './Aboutus';

import Contact from './Contact';
// import Chair from './screens/Chair';
import Trainers from './Trainers';
import Subscription from './Subscription';
import WorkoutPlan from './WorkoutPlan';
import Blog from './Blog';



function App() {
  
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
    <ToastContainer position="bottom-center" limit={1} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/signup" element={<SignupScreen/>} />
          {/* <Route path="/checkout" element={<Checkout/>} /> */}
          
          

     
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/trainers" element={<Trainers/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/workout" element={<WorkoutPlan/>} />
          <Route path="/contact" element={<Contact/>} />
          

          
          
          
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
