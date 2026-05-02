import './home.css'
import Navbar from '../../components/navbar/navbar'
import LupaIcon from '../../assets/icons/lupa.svg'
import CardEvent from '../../components/event/event-card'

function Home (){
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
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />

                </div>
                

            </section>

        </>
    )
}

export default Home