import React from 'react';
import {createRoot } from 'react-dom/client'
import {StrictMode } from 'react'
// import Component1 from './lec2412/component1';
import HtmlComponent from './lec2412/htmlcomponents';

// 1. class based implementation
//2 . function based implementation
//3. jsx javascript xml
// <DIV> FOR HTML BUT HERE <div> is for react
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Component1/> */}
   <HtmlComponent/>
   <div>hello1</div>
  </StrictMode>,
)
