import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';
import "./components/Body.css";
import React from 'react';

import './App.css';
//import { createClient } from 'graphql-ws'
//import  useCallback from 'react';

function App() {
  let emp=[{id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"},
    {id:1,name:"adf",date:"244"}
  ]
  return (
    <div className="App">
       <Navbar/>
       <thead className='events-tablee' >
    <tr className='leo'>
      <th id="aa">Serial Num</th>
      <th id="bb">Event Name</th>
      <th id="cc">Date & Venue</th>
    </tr>
  </thead>
{

   
  emp.map((obj)=>
  (
     <Body {...obj}/>
  )
  )
}
     
      


    </div>
  );
}

export default App;
