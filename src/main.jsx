import React from 'react';
import {createRoot } from 'react-dom/client'
import {StrictMode } from 'react'
// import StateMerge from './lec3012/state3';
// import MyButton from './lec3112/propsexmp';
// import MyCustComp from './lec3112/propsexmp3';
import Purefunc1 from './lec3112/purefunc1';
import MyCustButton from './lec3112/purefunc2';
// import MyList from './lec3112/propsexmp2';
// import Timetable from './lec2412/timetable';
// import StateABC from './lec3012/stack1';
// import Statexyz from './lec3012/state2';
// import Component1 from './lec2412/component1';
// import HtmlComponent from './lec2412/htmlcomponents';

// 1. class based implementation
// adding a coment 
//2 . function based implementation
//3. jsx javascript xml
// <DIV> FOR HTML BUT HERE <div> is for react
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Component1/> */}
   {/* <HtmlComponent/> */}
   {/* <Timetable/> */}
   {/* <StateABC/>*/}
   {/*  <Statexyz/> */}
   {/* <MyButton/> */}
   {/* <MyCustComp/> */}
   {/* <MyList/> */}
   {/* <StateMerge/> */}




{/*anonymous function  function as a component */}

{/* <Purefunc1 var1={ true} var2={"hello"}/>  
<Purefunc1 var1={ false} var2={"world"}/>  */}
   
   <MyCustButton/>
   <br/>
   <MyCustButton var1={true}/>
   <br/>
   <MyCustButton var2={"Priyal"}/>
   <br/>
   <MyCustButton var1={true} var2={"Kevinnnnn"}/>




  </StrictMode>,
)
