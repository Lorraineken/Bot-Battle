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

  function deleteBot(id){
     const updateBots = bots.filter((bot) => bot.id !== id )
     setBots(updateBots)
    console.log(id)
  }

  return (
    <div>
     <BotCollection bots ={bots} deleteBot={deleteBot}/>
    </div>
  );
}

export default App;
