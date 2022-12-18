import React, { useState } from 'react'
import './App.css';
import Chat from './Chat';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');

function App() {

  return (
    <>
    <div className='App'>
    <Chat socket={socket}/>
    </div>
    </>
  )
}

export default App
