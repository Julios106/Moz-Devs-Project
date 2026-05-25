import './event-card.css'
import Local from './assets/icons/local.svg'

type props ={
    local:string
}

export function LocalEvento({local}:props){
    return (
        <>
            <div className='data-info-group'>
                <img src={Local} />
                <p>{local}</p> 
            </div> 
        </>

    )    
}