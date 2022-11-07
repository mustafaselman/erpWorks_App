import CreateOrder from './components/CreateOrder';
import './App.css';
import React from 'react';
function App() {
  


  return (
    <div className="App">
    
      <CreateOrder/>
    </div>

  );
}

export default App;















//   const post  =  (url,data) => {

  //     fetch(url,{
  //         method: 'POST',
  //         body: JSON.stringify(data),
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8"
  //         }
  //     })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log("hata"));
  
  
  // }
  
  // post("http://localhost:3333/posts",{"title": "json-server", "author": "typicode" })