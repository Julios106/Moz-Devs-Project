import './event-card.css'
import Calendario from './assets/icons/calendario.svg'

type props = {
    data:any,
}


export function DataEvento({data}:props){
    return( 
        <>
            <div className='data-info-group'>
                <img src={Calendario} />
                <p>{data}, 18h</p>
            </div>
        </>    
    )
}