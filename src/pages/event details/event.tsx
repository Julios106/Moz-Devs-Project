import './event.css'
import Navbar from '../../components/navbar/navbar'
import {DataEvento,LocalEvento,ImagemEvento} from '../../components/event/event-card'
import ImgArea from '../../components/area-Perfil/area'
import Button from '../../components/button/button'

function Detalhes (){
    return (
        <>
            <nav>
                <Navbar/>
            </nav>

            <br />

            <section>
                <div className='container'>

                    <div className='img-space'>
                        <ImagemEvento/>
                    </div>

                    <div className='titulo'>
                        <p>Titulo do evento</p>
                    </div>

                    <div className='descricao-space'>
                        <p style={{fontWeight:"200"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laborum nesciunt itaque fugit tempore aperiam inventore, 
                            distinctio perferendis odit officia, ex molestiae est labore nobis quae? Nisi dolorem ex voluptatibus neque.
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