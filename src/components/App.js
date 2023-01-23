import React,{useEffect,useState} from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {

  const[bots,setBots] = useState([])
   
  useEffect(() =>{
    fetch("http://localhost:3000/bots")
   .then(response => response.json())
   .then((botsData) => setBots(botsData)
   )

  },[]) 

  console.log(bots)

  return (
    <div>
     <BotCollection bots ={bots}/>
    </div>
  );
}

export default App;
