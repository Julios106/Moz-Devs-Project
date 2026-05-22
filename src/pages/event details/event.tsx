import './event.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import {DataEvento,LocalEvento,ImagemEvento} from '../../components/event/event-card'
import api from '../../services/api'
import ImgArea from '../../components/area-Perfil/area'
import Button from '../../components/button/button'

function Detalhes (){

    const idParams   = useParams();
    const id = idParams.id;
    const [detalhe,setDetalhes] = useState(Object)

    useEffect(()=>{
        getDetalhes()
    },[])

    const getDetalhes = async()=>{
        try{
            const res = await api.getEventoId(id);
            setDetalhes(res.data.data)

        }catch(err:any){
            console.error(err)
        }finally{
            console.log('finh')
        }

    }


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
                        <p>{detalhe.nome}</p>
                    </div>

                    <div className='descricao-space'>
                        <p style={{fontWeight:"200"}}>
                            {detalhe.descricao}
                        </p>
                    </div>

                    <div className='data-local'>
                        <DataEvento/>
                        <LocalEvento/>
                    </div>

                    <p>Convidados</p>

                    <div className='convidado-Area'>
                        <ImgArea image="1" nome='Maphorisa'/>
                        <ImgArea image="1" nome='Maphorisa'/>
                        <ImgArea image="1" nome='Maphorisa'/>
                        <ImgArea image="1" nome='Maphorisa'/>

                    </div>

                    <p style={{fontSize:"18px"}}>Precos</p>
                    <p style={{fontWeight:"200"}}>Normal  500MT</p>
                    <p style={{fontWeight:"200"}}>Vip  500MT</p>

                    <p style={{fontSize:"18px"}}>Convidados</p>
                    <div className='convidado-Area'>
                        <ImgArea  image="2" nome='Vodacom'/>
                        <ImgArea  image="2" nome='Vodacom'/>
                        <ImgArea  image="2" nome='Vodacom'/>
                        <ImgArea  image="2" nome='Vodacom'/>
                    </div>

                    <br />
                    <Button texto='Adquire ja'/>
                </div>

            </section>

        </>
    )
}

export default Detalhes