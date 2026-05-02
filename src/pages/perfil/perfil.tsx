import './perfil.css'
import Navbar from '../../components/navbar/navbar' 
import ImageArea from '../../components/area-Perfil/area'
import Profile from '../../components/profilecomponent/perfilinfo'

function Perfil (){
    return (
        <>
            <nav>
                <Navbar/>
            </nav>

            <section>
                <div className='conteiner'>

                    <div className='descricao'>
                        <div className='img'>
                            <ImageArea image='1' nome='Profile Page'/>
                        </div>

                        <Profile txt="Eventos" num={9}/>
                        <Profile txt="pendentes" num={3}/>
                        <Profile txt="Em espera" num={1}/>

                    </div>



                </div>



                

            </section>


        </>
    )
}

export default Perfil