import './event.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import {ImagemEvento} from '../../components/event/event-card'
import { DataEvento } from '../../components/event/dataComponent'
import { LocalEvento } from '../../components/event/localComponent'
import api from '../../services/api'
import ImgArea from '../../components/area-Perfil/area'
import Button from '../../components/button/button'

type eventoDetalhe ={
    nome: string,
    descricao: string,
    local:any,
    data_evento:any,
    preco:any
}

function Detalhes (){

    const idParams   = useParams();
    const id = idParams.id;
    const [detalhe,setDetalhes] = useState<eventoDetalhe | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getDetalhes()
    },[])

    const getDetalhes = async()=>{
        try{
            setLoading(true)
            const res = await api.getEventoId(id);
            setDetalhes(res.data)

        }catch(err:any){
            console.error(err)
        }finally{
            setLoading(false)
            console.log('finh')
        }

    }
    
    const navigate = useNavigate()

    return (
        <>
            <nav>
                <Navbar/>
            </nav>

            <br />

            <section>

                
                <div className='containerDetalhes'>
                    

                    <div className='img-space'>
                        <ImagemEvento/>
                    </div>

                    <div className='titulo'>
                        <p>{detalhe?.nome}</p>
                    </div>
                    {loading && <div><p> loading detalhes</p></div>}

                    <div className='descricao-space'>
                        <p style={{fontWeight:"200"}}>
                            {detalhe?.descricao}
                        </p>
                    </div>

                    <div className='data-local'>
                        <DataEvento data={detalhe?.data_evento}/>
                        <LocalEvento local={detalhe?.local}/>
                    </div>

                    <p>Convidados</p>

                    <div className='convidado-Area'>
                        <ImgArea image="1" nome='Maphorisa'/>
                        <ImgArea image="1" nome='Maphorisa'/>
                        <ImgArea image="1" nome='Maphorisa'/>
                        <ImgArea image="1" nome='Maphorisa'/>

                    </div>

                    <p style={{fontSize:"18px"}}>Precos</p>
                    <p style={{fontWeight:"200"}}>Normal {detalhe?.preco} MT</p>
                    <p style={{fontWeight:"200"}}>Vip  500MT(sem rota)</p>

                    <p style={{fontSize:"18px"}}>Convidados</p>
                    <div className='convidado-Area'>
                        <ImgArea  image="2" nome='Vodacom'/>
                        <ImgArea  image="2" nome='Vodacom'/>
                        <ImgArea  image="2" nome='Vodacom'/>
                        <ImgArea  image="2" nome='Vodacom'/>
                    </div>

                    <br />
                    <Button texto='Adquire ja' onClick={()=>navigate("/newParticipant")} />
                </div>

            </section>

        </>
    )
}

export default Detalhes