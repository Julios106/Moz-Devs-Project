import './event-card.css'
import  EventImage from './assets/images/event.jpg'
import  Calendario from './assets/icons/calendario.svg'
import Local from './assets/icons/local.svg'
import Money from './assets/icons/money.svg'

function EventCard (){
    return (
        <>
            <div className='event-conteiner'>
                <div className='card'>
                    <div className='img-space'>
                        <img className='imagem-evento' src={EventImage}  />
                    </div>

                    <div className='envent-info'>

                        <div className='title'>
                            <h2>Nome do evento</h2>
                        </div>

                        <div className='info'>

                            <div className='data-info-group'>
                                <img src={Calendario} />
                                <p>30-Dec-2026, 18h</p>
                            </div>


                            <div className='data-info-group'>
                                <img src={Local} />
                                <p>Vila Olimpica</p> 
                            </div>

                            <div className='data-info-group'>
                                <img src={Money} />
                                <p>Apartir de 500 mt</p>
                            </div> 

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventCard