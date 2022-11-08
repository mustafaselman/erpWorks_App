
import './App.css';
import React from 'react';
import AppRouter from './router/AppRouter';
import UserContext from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';


function App() {
  
  
  
  return (
    <div className="App">

        <BrowserRouter>
        <UserProvider>
           <AppRouter/>
        </UserProvider>
       </BrowserRouter>
     
     

     

    </div>

  );
}

export default App;















 
  
