import { useNavigate } from 'react-router-dom'
import './event-card.css'
import  EventImage from './assets/images/event.jpg'
import  Calendario from './assets/icons/calendario.svg'
import Local from './assets/icons/local.svg'
import Money from './assets/icons/money.svg'


type props = {
    eventoName: any,
    local:any,
    data:any,
    preco:number,
    id:string
}
function EventCard ({eventoName,local,data,preco,id}: props){
    
    const navigate = useNavigate()

    


    return (
        <>
            <div className='event-conteiner' onClick={() =>{navigate("/detalhes/"+id);} }>
                <div className='card'>
                    <div className='img-space'>
                        <img className='imagem-evento' src={EventImage}  />
                    </div>

                    <div className='envent-info'>

                        <div className='title'>
                            <h2>{eventoName}</h2>
                        </div>

                        <div className='info'>

                            <div className='data-info-group'>
                                <img src={Calendario} />
                                <p>{data}</p>
                            </div>


                            <div className='data-info-group'>
                                <img src={Local} />
                                <p>{local}</p> 
                            </div>

                            <div className='data-info-group'>
                                <img src={Money} />
                                <p>{preco} MT</p>
                            </div> 

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}





export function ImagemEvento(){
    return (
        <>
            <div className='img-space'>
                <img className='imagem-evento' src={EventImage}  />
            </div>
        </>

    )    
}

export default EventCard