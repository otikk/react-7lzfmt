import { Link } from "react-router-dom";
import React, { Component } from 'react';
import tw, { styled } from 'twin.macro';






function Home() {
    return (
      
      <nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <svg className="h-6 w-6 inline-block fill-current text-yellow-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"></path>
            </svg>
            Bolt App
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center"> 
          
            <li className="mr-3">
              {/* <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a> */}
            </li>
            <li className="mr-3">
              {/* <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a> */}
              <Link  to="about">Link1</Link>
            </li>
            <li className="mr-3">
              {/* <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a> */}
              <Link  to="contact">Link2</Link>
            </li>
            </ul>
          <button id="navAction" class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            Action
          </button>
        </div>
      </div>
    </nav>
    
       
    );
  }
  
  export default Home;