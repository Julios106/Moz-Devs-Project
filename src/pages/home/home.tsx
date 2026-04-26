import './home.css'
import Navbar from '../../components/navbar/navbar'
import LupaIcon from '../../assets/icons/lupa.svg'

function Home (){
    return (
        <>
            <nav>
                <Navbar />
            </nav>

            <br />

            <section className='conteiner'>
                <div className='input'>

                    <div className="search">
                        <img src={LupaIcon} className="icon" />

                        <input type="text" placeholder="Pesquisar evento" />
                    </div>

                   
                </div>


                

            </section>

        </>
    )
}

export default Home