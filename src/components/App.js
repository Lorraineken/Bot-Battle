import React,{useEffect,useState} from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {

  const[bots,setBots] = useState([])
  const[armyBots,setArmyBots] = useState([])
   
  useEffect(() =>{
    fetch("http://localhost:3000/bots")
   .then(response => response.json())
   .then((botsData) => setBots(botsData)
   )

  },[]) 

  function deleteBot(id){
     const updateBots = bots.filter((bot) => bot.id !== id )
     setBots(updateBots) 
  }

  function addArmy(id){
    const  updateArmy=bots.filter((bot) => bot.id === id)
    const fullArmy=[...armyBots,updateArmy[0]]
    setArmyBots(fullArmy)
  }

  function releaseArmy(id){
 const updateArmy =armyBots.filter((bot)=> bot.id !== id)
   setArmyBots(updateArmy)
  }

  return (
    <div>
      <YourBotArmy armyBots = {armyBots} releaseArmy={releaseArmy}/>
     <BotCollection bots ={bots} deleteBot={deleteBot} addArmy={addArmy}/>
    </div>
  );
}

export default App;
