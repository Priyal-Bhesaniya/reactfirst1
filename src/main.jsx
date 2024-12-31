import React from 'react';
import {createRoot } from 'react-dom/client'
import {StrictMode } from 'react'
import StateMerge from './lec3012/state3';
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
   {/* <StateABC/>
   <Statexyz/> */}
<StateMerge/>
   
  </StrictMode>,
)
