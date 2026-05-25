import './home.css'
import {useState,useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import LupaIcon from '../../assets/icons/lupa.svg'
import CardEvent from '../../components/event/event-card'
import api from '../../services/api'

function Home (){

    const [events,setEvents] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        loadEvents()
    },[])

    const loadEvents = async()=>{
        try{
            setLoading(true)
            const res = await api.getEventos();
            setEvents(res.data || [])

        }catch(err : any){
            console.error(err)
        }finally{
            setLoading(false)
        }
    }
    //
    //const isLoggedIn = !!localStorage.getItem('token');


    return (
        <>
            <nav>
                <Navbar />
            </nav>

            <section className='conteiner'>
                <div className='input'>

                    <div className="search">
                        <img src={LupaIcon} className="icon" />

                        <input type="text" placeholder="Pesquisar evento" />
                    </div>

                   
                </div>
                
                

                <div className='evento'>

                    {loading && <p>A carregar eventos...</p>}
                    {
                        events.map((data:any)=>{
                            return(
                                <CardEvent 
                                    eventoName={data.nome}
                                    local={data.local} 
                                    data={data.data_evento} 
                                    preco={data.preco} 
                                    id={data._id}
                                    />

                            )
                        })

                    }
                    

                </div>
                

            </section>

        </>
    )
}

export default Home