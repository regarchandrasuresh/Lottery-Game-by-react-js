 import React,{useState} from "react";
import "./Lottery.css";
import {genTicket,sum} from "./Helper";
import Ticket from "./Ticket";


function Lottery({n,winningSum}){
  let [ticket,setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket = ()=>{
    setTicket(genTicket(n))
  }
  return(
     <div className="h1">
       <h1>Lottery Game!</h1>
       <div className="ticket">
     <Ticket ticket={ticket}/>
        
         </div>
         <button className="btn" onClick={buyTicket}>Buy new ticket</button>
         <h1>{isWinning && "Congratulation ,you won"}</h1> 
         </div>
  )
}
export default Lottery;
