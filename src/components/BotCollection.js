import React,{useEffect} from "react";

function BotCollection({bots}){

    const collection = bots.map((item) => <img key ={item.id} src={item.avatar_url} alt={`${item.name} ${item.bot_class}`} />)



    return (

        <div>
         {collection}
        </div>
    )
}

export default BotCollection