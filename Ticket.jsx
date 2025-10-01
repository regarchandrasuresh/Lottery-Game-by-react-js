import TicketNum from "./TicketNum";

export default function Ticket({ticket}){
    return (
        <div className="ticket">
            {
           ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>
           ))
           }
        </div>
    )
}
