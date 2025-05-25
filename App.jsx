// import React from 'react';
// // import './sinup.css'; 
// // import Myslider from './slider'; // Uncomment when using Myslider
// // import Local from './local';
// import "./App.css"
// import Navbar from './roting/navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
 
//       <Navbar/>
//       <BrowserRouter>
//       <Routes>
//         <Route path='./first' Component={"firstpage"}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './roting/navbar';
import Firstpage from './roting/firstpage'
import Secondpage from './roting/secondpage'
import Form from './form'
import Project from './prject/project'

const App = () => {
  return (
 <>
 {/* <Form/> */}
  {/* <Navbar/>
    <BrowserRouter>
 
      <Routes>
        <Route path="./first" element={<Firstpage/>}/>
        <Route path="./second" element={<Secondpage/>} />
       
      </Routes>
    </BrowserRouter> */}
      <Project/>
    </>  
  
    
  );
};

export default App;
