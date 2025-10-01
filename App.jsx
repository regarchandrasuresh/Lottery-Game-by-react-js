import React from "react";
import Lottery from "./Lottery.jsx";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";

export default function App() {
  return (
    <div>
       
        <Lottery n={3} winningSum={15}/>

    </div>
  );
}
         
