import React,{useEffect} from "react";

function BotCollection({bots}){

    const collection = bots.map((item) => 
    <div key ={item.id}>
    <img  src={item.avatar_url} alt={`${item.name} ${item.bot_class}`} />
    <p>Name: {item.name}</p>
    <p>Health: {item.health}</p>
    <p>Armor: {item.armor}</p>
    <p>BotClass: {item.bot_class}</p>
    <p>Catchphrase: {item.catchphrase}</p>
    </div>
    )



    return (

        <div>
         {collection}
        </div>
    )
}

export default BotCollection